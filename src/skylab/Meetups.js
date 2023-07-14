import React, { useEffect, useState } from 'react';
import { Pool } from 'pg';

function Meetups() {
  const [matchmakingData, setMatchmakingData] = useState([]);

  useEffect(() => {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    const fetchMatchmakingData = async () => {
      const client = await pool.connect();
      const result = await client.query(
        `SELECT discord_username, 
                opted_in, 
                num_chats, 
                num_ghosts, 
                CASE 
                  WHEN (num_chats + num_ghosts) = 0 THEN '100%'
                  ELSE (num_chats::decimal / (num_chats + num_ghosts) * 100)::text || '%'
                END AS success_rate 
         FROM matchmaking 
         ORDER BY num_chats DESC`
      );
      setMatchmakingData(result.rows);
      client.release();
    };

    fetchMatchmakingData();
  }, []);

  return (
    <div>
      <h1>Matchmaking Data</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Opted In?</th>
            <th>Successful Chats</th>
            <th>Ghosts</th>
            <th>Success Rate</th>
          </tr>
        </thead>
        <tbody>
          {matchmakingData.map((data, index) => (
            <tr key={index}>
              <td>{data.discord_username}</td>
              <td>{data.opted_in ? 'Yes' : 'No'}</td>
              <td>{data.num_chats}</td>
              <td>{data.num_ghosts}</td>
              <td>{data.success_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Meetups;
