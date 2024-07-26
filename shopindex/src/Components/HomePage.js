import React, { useEffect, useState } from 'react';
import '../App.css'; // Custom styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import shop from "./img/shop.jpg"


const JumiaLayout = () => {

  let [deal, setDeal] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5078/')
          .then(res => setDeal(res.data))
          .catch(e => console.log(e));
  },[]);
  
  console.log(deal)
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
          <button className="btn btn-secondary ms-2">Search</button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <a href='/login'><button className='btn btn-primary ms-2'>Sign In</button></a>
          </div>
          <a href='/signup'><button className='btn btn-primary ms-2'>sign Up</button></a>
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
          <Link to={"/login"}>
          <div className="row">
            {deal.map(deal => (
              <div key={deal.id} className="col-md-2 mb-2">
                <div className="card">
                  <img src={deal.photoUrl} alt={deal.title} className="card-img-top" />
                  <div className="card-body text-center">
                    <span>{deal.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div></Link>
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

const deals = [
  { title: 'Clearance Sale', img: 'https://res.cloudinary.com/dvxfph8qu/image/upload/v1721687853/gyrpbib5ioijzjxhyhtv.jpg' },
  { title: 'Computing Deals', img: 'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1721691080/1_ixg2vw.jpg' },
  { title: 'Special Offers', img: 'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1721691746/1_3_mkuvtg.jpg' },
  { title: 'Phones & Tablets Deals', img: 'https://via.placeholder.com/100x100' },
  { title: 'Appliances Deals', img: 'https://via.placeholder.com/100x100' },
  { title: 'Men\'s Sneakers', img: 'https://via.placeholder.com/100x100' },
  { title: 'Clearance Sale', img: 'https://via.placeholder.com/100x100' },
  { title: 'Computing Deals', img: 'https://via.placeholder.com/100x100' },
  { title: 'Special Offers', img: 'https://via.placeholder.com/100x100' },
  { title: 'Phones & Tablets Deals', img: 'https://via.placeholder.com/100x100' },
  { title: 'Appliances Deals', img: 'https://via.placeholder.com/100x100' },
  { title: 'Men\'s Sneakers', img: 'https://via.placeholder.com/100x100' },
];

const flashSaleImages = [
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690453/radient-mlp_djog52.jpg',
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690451/Desktop-Homepage-Slider_-712x384_ldlmq9.gif',
  'https://res.cloudinary.com/dvxfph8qu/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721690452/P55_Banner_712x384_tbg3ar.jpg',
];

export default JumiaLayout;
