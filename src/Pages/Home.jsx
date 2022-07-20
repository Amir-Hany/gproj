import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import './Home.css'
import feature1 from '../images/feature-img-1.png'
import feature2 from '../images/feature-img-2.png'
import feature3 from '../images/feature-img-3.png'
import {useStateContext} from '../context/ContextProvider'
const Home = () => {
  
  const {isloggedin} = useStateContext();
  const {setIsLoggedIn} = useStateContext();
  const {setUser} = useStateContext();
  const {user} = useStateContext();
  const [data, setData] = useState("");

  useEffect(() => {
      const log = localStorage.getItem("user-info");
      if (log) {
        setIsLoggedIn(true);
      }
    }, []);

    const [items, setItems] = useState([]);
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('user-info'));
      if (items) {
       setUser(items);
      }
    }, []);
    useEffect(() => {
      async function getproducts(){
        try {
         const products = await fetch("https://smartcart-helwan.herokuapp.com/api/products", {
          method : "GET",
          headers:{
            
          }
        })
        .then((response) => response.json())
        .then((actualData) => {
          setData(actualData);
        }) 
        } catch (error) {
          console.error(error);
        }
      }
      getproducts()
     }, [])
  

  return (
    
    <>
    
    <section className="home" id="home">
      
      <div className="content">
        <h3>Fresh and <span className='bigger'>Organic</span> products for you</h3>
        <p>Smart shopping doesn't mean less quality! Our products are hand picked for your health.</p>
        {isloggedin && <Link to="/GettingStarted" className="btn">shop now</Link>}
      </div>
    </section>
    
    <section className="features" id="features">

        <h1 className="heading"> our <span>Features</span> </h1>

        <div className="box-container">

          <div className="box">
            <img src={feature1} alt=""/>
              <h3>Fresh and organic</h3>
              <p>Premium hand picked products, connecting the future Inovation with past Quality</p>
              
            </div>

          <div className="box">
            <img src={feature2} alt="" />
              <h3>Free delivery</h3>
              <p>Save the time travelling to the store with our new delivery feature, and pay online with your account</p>
              
            </div>

          <div className="box">
            <img src={feature3} alt="" />
              <h3>Easy payments</h3>
              <p>No more waiting in long lines or using cash. The future is here. Safer, Faster, Better.</p>
              
          </div>

        </div>

      </section>
      
      <section className="products">
      <h1 className="heading"> our <span>Products</span> </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
          
        }}
        
        modules={[Pagination]}
        className="myswiper"
      >
        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              {data.length ? data.map((productsss) => (
                <SwiperSlide key={productsss.id}>
                   <img src={`https://smartcart-helwan.herokuapp.com${productsss.image}`} alt={productsss.name} className='rounded'/> 
                   <h3>{productsss.name}<div className="price"> price: ${productsss.price} </div></h3> 
                </SwiperSlide>
              )) : 'loading'}
            </div>
          </div>
        </div>
          
       
        
      </Swiper>
        </section>
      </>
    
  )
}

export default Home