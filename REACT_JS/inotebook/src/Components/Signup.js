import React, { useState } from "react";

function SignUp(props) {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the authToken and redirect
      localStorage.setItem('authToken', json.token);
      window.location.href = '/login';
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-5">
      <h2 className="my-2">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" />
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
