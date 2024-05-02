
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'; 

const Profile = ({ users }) => {
  return (
    <div className="main-heading">
      <h1 > Details of the users</h1>
      <br />
      <ul className="nav">
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/user/${user.name}`} className="link">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

