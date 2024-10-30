import { createBrowserRouter } from "react-router-dom";
import StudentInfo from "../pages/StudentInfo";
import Dashboard from "../pages/Dashboard";
import NoPage from "../pages/NoPage";
import LoginPage from "../pages/LoginPage";
import UploadReq from "../pages/UploadReq";
import UpdateCompany from "../pages/UpdateCompany";
import { getAuth } from "firebase/auth";
import MoaValidation from "../pages/MoaValidation";

const auth = getAuth();
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
        element: auth ? <Dashboard /> : <LoginPage />,
    },

    {
        path: '/studentInfo',
        element: auth ? <StudentInfo /> : <LoginPage />,
    },

    {
        path: '/uploadreq',
        element: auth ? <UploadReq /> : <LoginPage />
    },

    {
        path: '/updatecompany',
        element: auth ? <UpdateCompany /> : <LoginPage />,
    },
    {
        path: '/moaValidation',
        element: auth ? <MoaValidation /> : <LoginPage />,
    },


    {
        path: '/*',
        element: <NoPage />,
    },
]);

export default Routes;

