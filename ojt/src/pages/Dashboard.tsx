import React from 'react';
import MainOptions from "../components/MainOptions";
import Header from "../components/Header";
import "../styles/App.css"

const Dashboard: React.FC = () => {
  return ( 
    <div className = "app-container bg-gradient-to-t from-teal-500 to-blue-900 min-h-screen w-full items-center justify-center p-2.5 box-border overflow-hidden">
      <Header />
      <MainOptions />
    </div>
  );
}

export default Dashboard;
