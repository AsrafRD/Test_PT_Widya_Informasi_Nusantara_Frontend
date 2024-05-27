import React from 'react';
import useAuth from '../auth/userAuth';

const Profile = () => {
  const { user, authRedirect } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      {authRedirect()}
      <h2>Profile</h2>
      <table className="profile-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td> : {user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td> : {user.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td> :  {user.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
