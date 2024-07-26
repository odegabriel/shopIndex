import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Register = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      const response = await axios.post('http://localhost:5078/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res)=> res.status == 200? navigate("/login"):console.log("user sign-up failed"))
      ;

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
        <div className="register-form bg-light p-4 rounded-3 shadow">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-50">Sign Up</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <small><a href="#">Already have an account? Login</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
