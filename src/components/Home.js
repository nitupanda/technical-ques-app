
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import ContentFeed from './ContentFeed';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); 

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
    return null;
  }

  return (
    <div className='home'>
      <NavBar setSearch={setSearch}/>
      <div className='content'>
        <Sidebar onSelectCategory={setSelectedCategory} /> 
        <ContentFeed search={search} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;

