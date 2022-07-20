import React, { useCallback } from 'react'
import {useStateContext} from '../context/ContextProvider'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
const Profile = () => {
  
  const {setIsLoggedIn} = useStateContext();
  const {user} = useStateContext();
  const {setUser} = useStateContext();
  const [cuser, setCUser] = useState("");

  const [currentuser, setCurrentUser] = useState("");
  

  useEffect(() => {
      const log = localStorage.getItem("user-info");
      if (log) {
        setIsLoggedIn(true);
        const items = JSON.parse(localStorage.getItem('user-info'));
        if (items) {
          setUser(items);
        }
      }
     function getuser(){
        try {
         const profile = fetch ("https://smartcart-helwan.herokuapp.com/api/user-profile", {
          method: 'GET',
          headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
            'Authorization': `Token ${user.token}`
        }, 
        
        })
        .then((response) => response.json())
        .then((actualData) => {
         setCurrentUser(actualData);
         
        }) 
        } catch (error) {
          console.error(error);
        }
      }
      getuser()
    }, []);


  return (
    <>
    <section className="home2">
      <div>
        <span className='m-2'>User Profile:</span>
         <br/><br/><br/>
        {currentuser && 
        <p key={currentuser.id}>
          <p className='p-3 w-96 text-xl bg-teal-800 rounded overflow-hidden text-white getbig'>UserName :  {currentuser.username}</p> <br/><br/><br/>
          <p className='p-3 w-96 text-xl bg-teal-800 rounded overflow-hidden text-white getbig'>First Name: {currentuser.first_name}</p> <br/><br/><br/>
          <p className='p-3 w-96 text-xl bg-teal-800 rounded overflow-hidden text-white getbig'>Last Name: {currentuser.last_name}</p> <br/><br/><br/>
          <p className='p-3 w-96 text-xl bg-teal-800 rounded overflow-hidden text-white getbig'>Balance: EGP {currentuser.balance}</p> &nbsp; <Link to='/Recharge' className='btn'>Recharge</Link> <br/><br/><br/> 
          <p className='p-3 w-96 text-xl bg-teal-800 rounded overflow-hidden text-white getbig'>E-mail: {currentuser.email}</p> <br/><br/><br/>
        </p>
    }
        {!currentuser && "Loading Your Data"}
        
    </div>
    </section>
    </>
    
  )
}

export default Profile;




//     var myHeaders = new Headers();
//       myHeaders.append('Authorization', "Token 5966a2a4f5c6be6498bf6d0fea22834da8a929b0");
//       myHeaders.append('Access-Control-Allow-Origin', '*');
//       myHeaders.append('Content-Type', 'application/json');
//       myHeaders.append('Accept', 'application/json');

//       function fetchData() {
//     fetch('https://smartcart-helwan.herokuapp.com/api/add_orderItems',{
//     method: 'POST',
//     mode: 'no-cors',
//     headers: myHeaders,
//     withCredentials: true,
//     credentials: 'same-origin',
//     body:{
//       "barcode" : "123456789"
//     },
//   })
//       .then((response) => response.json())
//       .then((actualData) => {
//         setCUser(actualData);
//        })
// }
  

// let body = {
//   "barcode":"123456789"
// };
// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json',
//       "Access-Control-Allow-Origin": "*",
      
//       'Authorization':`Token ${user.token}`,
//       'Accept': 'application/json', 
//   },
//   mode: 'no-cors',
// };

// function fetchData(){
//  axios.post('https://smartcart-helwan.herokuapp.com/api/add_orderItems', body, axiosConfig)
// .then((res) => {
//   console.log("RESPONSE RECEIVED: ", res);
// })
// .catch((err) => {
//   console.log("AXIOS ERROR: ", err);
// }) 
// }

      
    //   const barcode = "444555666";
// const api = `https://smartcart-helwan.herokuapp.com/api/user-profile`
    // try {
    //   axios.get(api, {mode: "no-cors", headers: {"Authorization" : `Token ${user.token}`} })
    // .then((response) => response.json())
    //      .then((actualData) => {
    //        setCUser(actualData);
    //      })
    // } catch (error) {
    //   console.error(error);
    // }

       // axios.interceptors.request.use(
    //   config => {
    //     config.headers.authorization = `Token ${user.token}`;
    //     config.mode = "no-cors";
    //     return config;
    //   },
    //   error => {
    //     return Promise.reject(error);
    //   }
    // )

    
    //   const fetchData = useCallback(async () => {
    //     try {
    //       const result = await axios.post("https://smartcart-helwan.herokuapp.com/api/add_orderItems");
    //       setCUser(result.data);
    //     } catch (error) {
    //       setRequestError(error.message)
    //     }
    //   }) 