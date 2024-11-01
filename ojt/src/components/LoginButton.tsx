import "../styles/App.css";
import React, { useEffect, useState } from 'react';
import { signInWithGoogle } from '../services/GoogleAuth';
import Dashboard from "../pages/Dashboard";
import googleLogo from "../public/img/google-logo.png";
import "../services/Routes";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null); const [rejected, setRejected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    setRejected(false);
    try {
      const userData = await signInWithGoogle();
      if (userData) {
        setUser(userData);
      } else {
        setRejected(true);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });

  return (
    <div style={{ textAlign: 'center' }}>
      {user ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <div className="flex flex-col">

          <button className="flex items-center justify-center text-base bg-gray-300  rounded-md 
              h-8 border-none mt-4 mb-5 py-4 px-8 cursor-pointer hover:bg-gray-400 hover:text-black transition"
            onClick={handleGoogleLogin} disabled={loading}>
            <img src={googleLogo} className="w-4 h-auto mr-2" id="google-logo"></img>
            {loading ? "Loading" : "Sign-in With Google"}
          </button>
          {error && <p className="text-red-300 mt-5">{error}</p>}
          {rejected && (
            <p className="text-red-300">
              You need to log-in using Institutional Email.
            </p>
          )}
        </div>
      )

      }
    </div>
  );
};

export default Login;
