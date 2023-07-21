import React, { useEffect, useState } from 'react';

/* https://h4yyk3ufkjvozw7dflymxogm540drxqp.lambda-url.us-east-2.on.aws/ */

function Meetups() {
  const [matchmakingData, setMatchmakingData] = useState([]);

    return (
        <div>
          <h1>Welcome to Skylab meetups</h1>
          <p>Hello, world! This is the landing page for Skylab meetups.</p>
          {/* Add more content or sections as needed */}
        </div>
      );
}

export default Meetups;
