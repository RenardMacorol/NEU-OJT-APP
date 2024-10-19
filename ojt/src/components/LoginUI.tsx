import Login from "./LoginButton";
import "../styles/LoginUI.css";
import neu_logo from "../public/img/neu_logo.png";

const LoginUI: React.FC = () => {
    return (
        <div className="login-container">
            <img src={neu_logo} id="neu_logo"></img>
            <h1>Welcome to NEU's OJT App!</h1>
            <h2>Please login using Institutional Email.</h2>
            <Login />
        </div>
    )
}

export default LoginUI;
