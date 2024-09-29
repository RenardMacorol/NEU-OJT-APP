<<<<<<< HEAD
import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes";
=======
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
>>>>>>> bcc75b04bee6bc2b1ae62791b3e8886049abdff5


const App = () => {
    return <RouterProvider router={Routes} />;
};

export default App;