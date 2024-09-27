import React, { useState } from 'react';
import { signInWithGoogle } from '../services/GoogleAuth';

const Login: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [rejected, setRejected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <div style={{ textAlign: 'center' }}>
      {user ? (
        <div>
          <h3>Welcome to the Neu App, {user.displayName}</h3>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleLogin} disabled={loading}>
            {loading ? "Singingg in.." : "Sign-in With Google"}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {rejected && (
            <p style={{ color: 'red' }}>
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
