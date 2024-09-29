import React from 'react';
import MainOptions from "../components/MainOptions";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

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