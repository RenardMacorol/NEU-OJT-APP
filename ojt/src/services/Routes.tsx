import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import StudentInput from "../pages/StudentInput";
import NoPage from "../pages/NoPage";
import LoginPage from "../pages/LoginPage";
import UploadReq from "../pages/UploadReq";
import GenEndLetter from "../pages/GenEndLetter";
import UpdateCompany from "../pages/UpdateCompany";

const Routes = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },

    {
        path: "/",
        element: <LoginPage />,
    },

    {
        path: '/dashboard',
        element: <Dashboard />,
    },

    {
        path: '/studentinput',
        element: <StudentInput />,
    },

    {
        path: '/uploadreq',
        element: <UploadReq />,
    },

    {
        path: '/genendletter',
        element: <GenEndLetter />,
    },

    {
        path: '/updatecompany',
        element: <UpdateCompany />,
    },

    {
        path: '/*',
        element: <NoPage />,
    },
]);

export default Routes;

