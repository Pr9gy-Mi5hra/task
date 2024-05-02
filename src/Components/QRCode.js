

import React from 'react';
import QRCodeComponent from 'qrcode.react'; 
import './ui.css';

const QRCode = ({ website, socialMedia }) => {
  return (
    <div className="container1">
      <div className="website">
        <QRCodeComponent value={website} id='val'/>
        <h3>Website</h3>
      </div>
      <div className="container2">
        <QRCodeComponent value={socialMedia} id='val2'/>
        <h3>Instagram</h3>
      </div>
      
    </div>
  );
};

export default QRCode;

