import React from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import ContentFeed from "./ContentFeed";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState('');

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
};

export default Home;
