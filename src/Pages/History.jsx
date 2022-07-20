import React from 'react'
import {useStateContext} from '../context/ContextProvider'
import { useEffect, useState } from "react";
const History = () => {
  const {setIsLoggedIn} = useStateContext();
  const [history, setHistory] = useState();
  const [shistory, setSHistory] = useState([]);
  const {user} = useStateContext();
  let hcounter = 1;
  useEffect(() => {
      const log = localStorage.getItem("user-info");
      if (log) {
        setIsLoggedIn(true);
      }
    }, []);

    useEffect(()=> {
      try {
        const hist = fetch("https://smartcart-helwan.herokuapp.com/api/orders/logged-in-user/",{
          method : "GET",
          headers:{
            'Authorization': `Token ${user.token}`,
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
          }
        })
        .then((response) =>response.json())
        .then((actualData) => {
          setHistory(actualData)
        })
      } catch (error) {
        console.error(error);
      }
    }, [])
    
    
    //  function details(oid){
    //   if(hcounter == 0){
    //     try {
    //       const historyy =  fetch(`https://smartcart-helwan.herokuapp.com/api/orders/logged-in-user/${oid}`,{
    //         method : "GET",
    //         headers:{
    //           'Authorization': `Token ${user.token}`,
    //           'Accept': 'application/json, text/plain',
    //           'Content-Type': 'application/json',
    //         }
    //       })
    //       .then((response) =>response.json())
    //       .then((actualData) => {
    //         setSHistory(actualData);
    //         console.log(shistory);
    //       })
    //     } catch (error) {
    //       console.error(error);
    //     }
    //     console.log(hcounter)
    //     hcounter = hcounter + 1;
    //   }else{
    //     hcounter = 0;
    //     return;
    //   }}
      // try {
      //   const historyy =  fetch(`https://smartcart-helwan.herokuapp.com/api/orders/logged-in-user/${oid}`,{
      //     method : "GET",
      //     headers:{
      //       'Authorization': `Token ${user.token}`,
      //       'Accept': 'application/json, text/plain',
      //       'Content-Type': 'application/json',
      //     }
      //   })
      //   .then((response) =>response.json())
      //   .then((actualData) => {
      //     setSHistory(actualData);
      //     console.log(shistory);
      //   })
      // } catch (error) {
      //   console.error(error);
      // }
    
  return (
    <>
      <section className='features'>
        
        <div>Your History</div><br/><br/>
        {history && history.map((histo)=>(
          <div key={histo.id} className='box-containerr'>
            <div className='box'>
              On {histo.date_ordered} an order costing {histo.total_price} was made <br/>
            including: {JSON.stringify(histo.orderItems)} 
            </div>
                   
          </div>
        ))
          }
          
          {!history && "Loading..."}
         
      </section>
    </>
  )
}

export default History