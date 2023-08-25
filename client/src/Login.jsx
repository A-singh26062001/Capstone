import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImg from './Capture.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === 'Success') {
          // Generate a unique value (e.g., a timestamp)
        //   const uniqueValue = Date.now();
        //   navigate(`/homeLogin?token=${uniqueValue}`); // Navigate to homeLogin with the unique value as a query parameter
        navigate(`/homeLogin`);    
    }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred while logging in.');
      });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
