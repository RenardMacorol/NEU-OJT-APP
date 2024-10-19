import React from 'react';
import MainOptions from "../components/MainOptions";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import "../components/App.css"

const Dashboard: React.FC = () => {
  return ( 
    <div className = "app-container">
      <Header />
      <SearchBar />
      <MainOptions />
    </div>
  );
}

export default Dashboard;
