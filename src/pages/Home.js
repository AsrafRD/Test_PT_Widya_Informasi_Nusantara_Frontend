import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <h2>Hi, {user.name}! Welcome to My App</h2>
      ) : (
        <h2>Welcome to My App, please login</h2> 
      )}
    </div>
  );
};

export default Home;
