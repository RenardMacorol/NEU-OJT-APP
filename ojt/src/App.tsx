import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes";

const App = () => {
    return <RouterProvider router={Routes} />;
};

export default App;
