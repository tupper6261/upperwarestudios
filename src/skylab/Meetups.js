import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* https://h4yyk3ufkjvozw7dflymxogm540drxqp.lambda-url.us-east-2.on.aws/ */

function Meetups() {
  const [meetupData, setMeetupData] = useState([]);

  const fetchMeetupData = async () => {
    try {
      const response = await axios.get(
        'https://h4yyk3ufkjvozw7dflymxogm540drxqp.lambda-url.us-east-2.on.aws/'
      );
      console.log('Fetched meetup data:', response.data); // Log the fetched data
      setMeetupData(response.data);
    } catch (error) {
      console.error('Error fetching meetup data:', error);
    }
  };

  useEffect(() => {
    fetchMeetupData();
  }, []);

  // JSX to render the table
  return (
    <div>
      <h1>Meetups</h1>
      <table>
        <thead>
          <tr>
            <th>Discord User ID</th>
            <th>Opted In</th>
            <th>Ghosted</th>
            <th>Number of Ghosts</th>
            <th>Number of Chats</th>
            <th>Discord Username</th>
          </tr>
        </thead>
        <tbody>
          {meetupData.map((meetup) => (
            <tr key={meetup.discord_user_id}>
              <td>{meetup.discord_user_id}</td>
              <td>{meetup.opted_in.toString()}</td>
              <td>{meetup.ghosted.toString()}</td>
              <td>{meetup.num_ghosts}</td>
              <td>{meetup.num_chats}</td>
              <td>{meetup.discord_username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Meetups;