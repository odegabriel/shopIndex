import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import cart from "./img/cart.jpg"
import userProfile from "./img/userProfile.jpg"
import shop from "./img/shop.jpg"


const ProductDetail = () => {

  // let {id} = useParams();

  let user = localStorage.getItem("user");
  let [deal, setDeal] = useState({});

  let {productId} = useParams();
  let [submit, setSubmit] = useState("ADD TO CART");

  useEffect(()=>
    {
      axios.get(`http://localhost:5078/user/${productId}`)
        .then(res => 
          {  
            setDeal(res.data)
            console.log(deal)
            console.log(res.data)
          })
        .catch (e => console.log(e));

    }, [])
  
  let handleAddToCart =(e)=>
    {
      setSubmit("ADDED")
     
    }

    useEffect(()=>{
      axios.post(`http://localhost:5078/${user}/${deal.id}`,
                      {
                      headers: {
                        'Content-Type': 'application/json'
                      }}
                )
                    .then(res =>console.log(res.data) )
                    .catch( e => console.log(e))
                }, [submit]);


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
          <button className="btn btn-primary ms-2">Search</button>
        </div>
        <div className="d-flex align-items-center gap-3">
        <a href='/user/cart'><img src={cart} style={{width:"30px", height:"30px"}} /></a>
        <a href='/profile'><img src={userProfile} style={{width:"30px", height:"30px"}} /></a>
        <a href='/login'><button className='btn btn-primary ms-2' onClick={()=> localStorage.clear()}>log Out</button></a>
        
        <button></button>
        </div>
      </header>

    <div className='p-3 container custom'>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={deal.photoUrl}
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <button className="btn btn-light mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="btn btn-light mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
              </div>
              <p className="text-center mt-2">
                <a href="#" className="text-primary">Report incorrect product information</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5>{deal.title}</h5>
          <p className="text-muted">Brand: {deal.brand}</p>
          <h3 className="text-danger">₦ {deal.discountPrice} <del> ₦ {deal.price}</del> </h3>
          <p className="text-muted">Few units left</p>
          <p>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</p>
          <div className="d-flex align-items-center">
            <span className="badge bg-warning text-dark me-2">★★★★☆</span>
            <p className="m-0">(174 verified ratings)</p>
          </div>
          <button className="btn btn-warning btn-lg mt-3" onClick={handleAddToCart}>{submit}</button>
          <div className="mt-4">
            <h6>PROMOTIONS</h6>
            <ul className="list-unstyled">
              <li>Call 07006000000 To Place Your Order</li>
              <li>Need extra money? Loan up to ₦500,000 on the JumiaPay Android app.</li>
              <li>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h6>DELIVERY & RETURNS</h6>
          <p className="text-danger">SHOPINDEX EXPRESS</p>
          <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja <a href="#" className="text-primary">Details</a></p>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Choose your location</label>
            <select id="location" className="form-select">
              <option>Lagos</option>
              <option>LEKKI-AJAH (SANGOTEDO)</option>
            </select>
          </div>
          <div className="mb-3">
            <h6>Pickup Station <span className="text-muted">Details</span></h6>
            <p>Delivery Fees ₦ 250</p>
            <p>Arriving at pickup station between 19 July & 22 July when you order within next 6hrs 6mins</p>
          </div>
          <div className="mb-3">
            <h6>Door Delivery <span className="text-muted">Details</span></h6>
            <p>Delivery Fees ₦ 620</p>
            <p>Ready for delivery between 19 July & 22 July when you order within next 6hrs 6mins</p>
          </div>
          <div className="mb-3">
            <h6>Return Policy <span className="text-muted">Details</span></h6>
            <p>Free return within 7 days for ALL eligible items</p>
          </div>
        </div>
        <div className="col-md-6">
          <h6>SELLER INFORMATION</h6>
          <div className="mb-3">
            <h6>Digital Home Workshop-COD</h6>
            <p>80% Seller Score</p>
            <p>397 Followers</p>
            <button className="btn btn-outline-warning">FOLLOW</button>
          </div>
          <div className="mb-3">
            <h6>Seller Performance</h6>
            <ul className="list-unstyled">
              <li>Order Fulfillment Rate: Excellent</li>
              <li>Quality Score: Average</li>
              <li>Customer Rating: Good</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
      <Footer/>
    </div>
  );
};

export default ProductDetail;
