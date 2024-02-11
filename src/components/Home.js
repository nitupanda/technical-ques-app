// import React from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import ContentFeed from "./ContentFeed";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [type, setType] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Check current user's status in localStorage
    const currentUser = localStorage.getItem('currentuser');
    if (currentUser) {
      const userData = localStorage.getItem(JSON.parse(currentUser));
      let data=JSON.parse(userData)

      if (data && !data.active) {
        setIsLoggedIn(false); // Set isLoggedIn to false if user's status is false
      }
    } else {
      setIsLoggedIn(true); // Set isLoggedIn to false if current user doesn't exist
    }
  }, []);

  if (!isLoggedIn) {
    navigate('/');
    return null; // Return null to prevent rendering the Home component content
  }

    // Function to handle type selection from SidebarOptions
  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
  };

  return (
        <>
          <div className="home">
            <NavBar setSearch={setSearch} />
            <div className="content">
              <Sidebar onTypeSelect={handleTypeSelect} />
              <ContentFeed search={search} type={type}/>
            </div>
          </div>
        </>
      );
}

export default Home;

