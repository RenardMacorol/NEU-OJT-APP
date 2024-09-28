import React from 'react';
import Login from './components/Login';
import MainOptions from "./components/MainOptions";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className = "app-container">
      <Header />
      <SearchBar />
      <MainOptions />
    </div>
  );
}

export default App;
