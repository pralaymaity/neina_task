
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    
      const [friends, setFriends] = useState([]);
    
      useEffect(() => {
        axios.get('/api/friends').then((response) => setFriends(response.data));
      }, []);
    
      const increasePoints = async (friendId) => {
        try {
          await axios.post(`/api/friends/${friendId}/increase-points`);
          setFriends((prev) =>
            prev.map((friend) =>
              friend.id === friendId ? { ...friend, points: friend.points + 1 } : friend
            )
          );
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div>
          {friends.map((friend) => (
            <div key={friend.id} onClick={() => increasePoints(friend.id)}>
              {friend.name} - {friend.points} points
            </div>
          ))}
        </div>
      );
    
    
    
}

export default Home