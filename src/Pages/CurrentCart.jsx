import React from 'react'
import { useState, useEffect } from "react";
import {useStateContext} from '../context/ContextProvider'
const CurrentCart = () => {

  
  let responsee2 = 0;
  let item0 
  let item1 
  let item2 
  let item3 
  const [data2, setData2] = useState([]);
  const {user} = useStateContext();
  const {setUser} = useStateContext();
  const {cartonline} = useStateContext();
  const {setCartOnline} = useStateContext();
  const [recommend, setRecommend] = useState('')
  const [showrecommend, setShowRecommend] = useState(false)
  // let itemss = {o: '', 1: '', 2: '', 3: '',}
   let counter = 0;
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user-info'));
    if (items) {
     setUser(items);
    }
  }, []);


const {setIsLoggedIn} = useStateContext();
  
  useEffect(() => {
      const log = localStorage.getItem("user-info");
      if (log) {
        setIsLoggedIn(true);
      }
    }, []);
    useEffect(()=>{
      const state = localStorage.getItem("cart-state");
      if (state) {
        setCartOnline(true);
      }
    }, [])

    async function test(event){
      event.preventDefault();
      let result = await fetch("https://smartcart-helwan.herokuapp.com/api/login-cart", {
      method : "POST",
      headers:{
       
      },
      body: JSON.stringify(user.token)
    });
    result = await result.json();
    console.log(result);
    responsee2 = "0";
    setTimeout(checking, 4000);
    }

    useEffect(()=> {
      async function getrecommendation(){
        try {
          const reco = await fetch ("https://smartcart-helwan.herokuapp.com/api/recommendations",{
            method : "GET",
            headers:{
            }
          })
          .then((response) =>response.json())
          .then((actualData) => { 
            setData2(actualData)
          })
        } catch (error) {
          console.error(error);
        }
      }
      getrecommendation()
      
    }, [])

    
    async function checking(){       
        try {
           const products = await fetch("https://smartcart-helwan.herokuapp.com/api/confirm-login-cart", {
            method : "GET",
            headers:{
            }
          })
          .then((response) =>response.json())
          .then((actualData) => {
            if (actualData.Status === 'Logged In') {
              console.log('inside this time');
              responsee2 = actualData.Status;
              console.log(responsee2);
            }
            else{
              responsee2=actualData;
              console.log(responsee2);
            }
          })
            if (responsee2 === "Logged In") {
              setCartOnline(true);
              localStorage.setItem("cart-state" ,"Reserved")
              responsee2 = "0";
              reservecart();
              return;
            }
            else{
              if (counter === 15) {
                alert('Cart login failed');
                counter=0;
                return;
              }else{
               counter = counter + 1;
               setTimeout(checking, 500);  
              } 
            } 
           
          } catch (error) {
            console.error(error);
          }
    }

    let cart = {
      "cart":"1"
  }
    function reservecart(){
      try {
        let result = fetch("https://smartcart-helwan.herokuapp.com/api/create_order", {
      method : "POST",
      headers:{
        'Authorization': `Token ${user.token}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart)
    });
      } catch (error) {
        console.error(error);
      }
    }
    
    async function exitcart(event){
      event.preventDefault();
      let result = await fetch("https://smartcart-helwan.herokuapp.com/api/logout-cart", {
      method : "POST",
      headers:{
       
      },
      body: JSON.stringify("Done shopping")
    });
    result = await result.json();
    console.log(result);
    responsee2='0';
    setTimeout(checking_logout, 4000);
  }

  async function checking_logout(){       
    try {
       const products = await fetch("https://smartcart-helwan.herokuapp.com/api/confirm-logout-cart", {
        method : "GET",
        headers:{
        }
      })
      .then((response) =>response.json())
      .then((actualData) => {
        if (actualData.Status === 'Logged out') {
          console.log('inside this time');
          responsee2 = actualData.Status;
          console.log(responsee2);
        }
        else{
          responsee2=actualData;
          console.log(responsee2);
        }
      })
        if (responsee2 === "Logged out") {
          setCartOnline(false);
          localStorage.removeItem("cart-state");
          alert('successfully Logged out of the cart')
          responsee2 = "0";
          return;
        }
        else{
          if (counter === 15) {
            alert('Cart logout failed');
            counter=0;
            return;
          }else{
           counter = counter + 1;
           setTimeout(checking_logout, 500);  
          } 
        } 
       
      } catch (error) {
        console.error(error);
      }
}
    
  //  function test23(){
  //   let mycount = 0
  //   console.log(recommend)
  //   for (let [key, value] of Object.entries(recommend)) {
  //     itemss[mycount] = value.name
  //     console.log(`${key}: ${value.name}`);
  //     mycount = mycount + 1;
  //   }
  //   console.log(itemss)
    
  //  }
   function testing232(){
     console.log(item0)
     console.log(item1)
     console.log(item2)
     console.log(item3)
   }
  
  return (
    <>
    <section>
      <div>
        Current Cart <br/><br/> 
        <div>
         
        </div>
        {!cartonline && 
          <div>
            <br/><button onClick={test} className='bg-green-600 rounded p-3 m-2'>Connect to a cart</button><br/>
            
          </div>
        }
        {cartonline && <div>
            <br/><button onClick={exitcart} className='bg-red-600 rounded p-3 m-2'>Logout of the cart</button><br/><br/><br/>
            <div>
           we recommend: {JSON.stringify(data2)}
         </div>
        </div>}            
      </div>
    </section> 
    </>  
  )
}
export default CurrentCart;

