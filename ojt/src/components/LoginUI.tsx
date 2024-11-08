import Login from "./LoginButton";
import "../styles/LoginUI.css";
import neu_logo from "../public/images/neu_logo.png";

const LoginUI: React.FC = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col text-center items-center
                max-w-[550px] max-h-[90vh] bg-gray-200 mx-auto rounded-lg py-10">
                <img src={neu_logo} alt="NEU Logo" className="w-1/3 h-auto mb-4" id="neu_logo"></img>
                <h1 className="font-poppins font-medium text-2xl mt-5 mb-1">Welcome to NEU's OJT App!</h1>
                <h2 className="font-poppins font-light text-[20] ">Please login using Institutional Email.</h2>
                <Login />
            </div>
        </div>
    )
}

export default LoginUI;
