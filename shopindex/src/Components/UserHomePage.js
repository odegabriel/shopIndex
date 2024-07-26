import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import '../App.css'; // Custom styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Footer';
import axios from 'axios';
import userProfile from "./img/userProfile.jpg"
import cart from "./img/cart.jpg"
import shop from "./img/shop.jpg"

const JumiaLayout = () => { 

    let {userId} = useParams();    
    let user = localStorage.getItem("user");
    let token = localStorage.getItem("token")
    let [deal, setDeals] =useState([]);

    const config = {
      "Authorization" : `Bearer ${token}`,
      "Content-Type" : `application/json`
    }

  useEffect(()=>{
    axios.get("http://localhost:5078/", 
     config       
    )
    .then(res =>  setDeals(res.data) )
    .catch(e => alert("am error has occured"))

  },[])

  return (
    <div className="">
      
      <header className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom sticky-top shadow-sm">
        <img src={shop }  style={{width:"60px", height:"30px"}} alt="SHOPINDEX" />
        <div className="d-flex w-50">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search products, brands and categories" 
          />
          <button className="btn btn-secondary ms-2 ">Search</button>
        </div>
        <div className="d-flex align-items-center gap-3">
        <a href='/user/cart'><img src={cart} style={{width:"30px", height:"30px"}} /></a>
        <a href='/profile'><img src={userProfile} style={{width:"30px", height:"30px"}} /></a>
        <a href='/login'><button className='btn btn-primary ms-2' onClick={()=> localStorage.clear()}>logOut</button></a>

        </div>
      </header>
      <div className='container custom'>
      <div className="row mt-3">
        <aside className="col-md-2 p-3">
          {sidebarItems.map(item => (
            <div key={item} className="p-2 border-bottom">{item}</div>
          ))}
        </aside>
        
        <div className="col-md-10">
          <div className="bg-warning p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h2>FLASH SALES</h2>
                <p>Everyday deals you don't want to miss</p>
              </div>
            </div>
            <div id="flashSaleCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {flashSaleImages.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={img} className="d-block w-100" alt={`Flash Sale ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#flashSaleCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#flashSaleCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="row">
            {deal.map(deal => (
              <div key={deal.id} className="col-md-2 mb-2">
                <div className="card">
                 <a href={`/${user}/${deal.id}`}> <img src={deal.photoUrl} alt={deal.title} className="card-img-top" /> </a>
                  <div className="card-body text-center">
                    <span>{deal.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

const sidebarItems = [
  'Supermarket',
  'Health & Beauty',
  'Home & Office',
  'Appliances',
  'Phones & Tablets',
  'Computing',
  'Electronics',
  'Fashion',
  'Baby Products',
  'Gaming',
  'Sporting Goods',
  'Other categories',
];


const flashSaleImages = [
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690453/radient-mlp_djog52.jpg',
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690451/Desktop-Homepage-Slider_-712x384_ldlmq9.gif',
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690452/P55_Banner_712x384_tbg3ar.jpg',
];


export default JumiaLayout;
