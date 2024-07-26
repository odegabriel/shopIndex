import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {

  let [error, setError] = useState("");

  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5078/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // .then((res)=> res.data.email == null ? console.log("user does not edit") : );
      .then(res => {
        if (res.data.token) {
          let token = res.data.token;
          localStorage.setItem("token", token )
          localStorage.setItem("user", res.data.user.id);
          navigate(`/user`)
        }
        else{
          setError("user does not exist")
        }
        
      });

      // console.log('Form Data Submitted:', response.data);
      // Handle success response here
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error response here
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-5 col-xl-4">
        <div className="login-form bg-light p-4 rounded-3 shadow">
          <h2 className="text-center mb-4">Login</h2>
          <div>{error}</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="text" 
                className="form-control" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-50">Login</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <small><a href="#">Forgot Password?</a></small>
          </div>
          <div className="text-center mt-3">
            <small><a href="/signup">sign up</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
