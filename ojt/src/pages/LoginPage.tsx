import React from "react";
import LoginUI from "../components/LoginUI";
import "../styles/LoginUI.css";

const LoginPage: React.FC = () => {
    return (
        <div className="bg-gradient-to-t from-teal-500 to-blue-900" >
            <LoginUI />
        </div>
    )
}

export default LoginPage;
