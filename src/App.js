
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './Components/Profile';
import Ui from './Components/Ui';

const users = [
  {
    "name": "ajay pradhan",
    "email": "ajay.pradhan@spoxtale.com",
    "website": "https://www.2pointoh.in",
    "socialmedia": "https://www.instagram.com/2.oh_india",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU"
  },
  {
    "name": "usman",
    "email": "usman@spoxtale.com",
    "website": "https://www.2pointoh.in",
    "socialmedia": "https://www.instagram.com/2.oh_india",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODx-IWchgdo2szM86JgYNFsXPWsI8ZmIAzGfbIdqnjw&s"
  },
  {
    "name": "shantanu singh",
    "email": "shantanu.singh@spoxtale.com",
    "website": "https://www.2pointoh.in",
    "socialmedia": "https://www.instagram.com/2.oh_india",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU"
  },
  {
    "name": "aditya",
    "email": "aditya.verma@spoxtale.com",
    "website": "https://www.2pointoh.in",
    "socialmedia": "https://www.instagram.com/2.oh_india",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jwEHzg5dm29oUwpVWflTmQHqBLJUuCYd_ise9N4Ckg&s"
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profile users={users} />} />
          <Route path="/user/:handle" element={<Ui users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


