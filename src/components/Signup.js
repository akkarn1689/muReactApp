import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Here you can add your sign-up logic, such as making an API call to create a new user
    try {
      await signUp(email, password);
      navigate("/login")
    } catch (err) {
      setError(err.message);
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="border border-black"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="border border-black"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>
          Already have an account?   <Link to="/login">login</Link>
        </div>

      </form>
    </div>
  );
};

export default SignUp;

