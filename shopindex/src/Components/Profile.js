import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import cart from "./img/cart.jpg"
import shop from "./img/shop.jpg"


const ProfilePage = () => {

  let id = localStorage.getItem("user");
  let [info, setInfo] = useState({});


  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post(`http://localhost:5078/profile/${id}`, formData,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => console.log(res.data))
      .catch((error) => {
        console.error('Error submitting data:', error);
        
      });
  };

  useEffect(()=>{
    axios.get(`http://localhost:5078/getUserInfo/${id}`)
          .then(res => setInfo(res.data))
          .catch();
  }, [handleChange]);

  return (
    <div>
    <div className=''>
    <header className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom sticky-top shadow-sm">
      <img src={shop }  style={{width:"60px", height:"30px"}} alt="SHOPINDEX" />
        <div className="d-flex w-50">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search products, brands and categories" 
          />
          <button className="btn btn-secondary ms-2">Search</button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
          <a href='/user/cart'><img src={cart} style={{width:"30px", height:"30px"}} /></a>
            <a href='/login'><button className='btn btn-primary ms-2' onClick={()=> localStorage.clear()}>log Out</button></a>
            
          </div>
          
        </div>
      </header>
              <div className='container mt-5'>
      
              <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 p-6">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3 ">
                {/* <img src="https://via.placeholder.com/150" alt="Profile" className="img-thumbnail" /> */}
              </div>
              <p className="card-text">first Name: <b>{info.firstName}</b></p>
              <p className="card-text">first Name: <b>{info.lastName}</b></p>
              <p className="card-text">Phone Number: <b>{info.phoneNumber}</b></p>
              <p className="card-text">Email Address: <b>{info.email}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="file" className="form-label">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={handleFileChange}
              />
            </div> */}
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>




            </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
