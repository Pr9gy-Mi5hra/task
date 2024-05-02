
import React from 'react';
import QRCode from './QRCode';
import { useParams } from 'react-router-dom';
import './ui.css';

const Ui = ({ users }) => {
  const { handle } = useParams();
  const user = users.find((u) => u.name === handle);

  if (!user) {
    return <p>error</p>;
  }

  return (
    <div className="web-page">
      <h1 className="heading">This is the website page</h1>
      <div className="div1">
        <div className="profile">
          <h2>Profile</h2>
          <img src={user.Image} alt="Profile Pic" className="user-pic" /><br /><br />
          <span><b>Name:</b> {user.name}</span> <span><b>Email:</b> {user.email}</span>
          <p><b>Website:</b> <a href={user.website}>{user.website}</a></p>
          <p><b>Social Media:</b> <a href={user.socialmedia}>{user.socialmedia}</a></p>
          <br/>
          
          <div>
            <QRCode
              website={user.website}
              socialMedia={user.socialmedia}
            />
         
          </div>
        
        </div>
      
      </div>
     
    </div>
    
  );
};

export default Ui;


