import React, {useState, useEffect} from 'react'
import {useStateContext} from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom';
const Recharge = () => {
  
  const[code, setCode] = useState('')
  const[usename, setUseName] = useState('')
  const {setIsLoggedIn} = useStateContext();
  const {user} = useStateContext();
  const {setUser} = useStateContext();
  const navigate = useNavigate();
  function handleSubmit(){
    
    console.log(usename)
    console.log(code)
    
  }
  useEffect(() => {
    const log = localStorage.getItem("user-info");
    if (log) {
      setIsLoggedIn(true);
      const items = JSON.parse(localStorage.getItem('user-info'));
      if (items) {
        setUser(items);
      }
    }}, [])
    function handleSubmit(){
      try {
        const recharge = fetch(`https://smartcart-helwan.herokuapp.com/api/recharge?username=${usename}&transctionid=${code}`, {
          method : "GET",
          headers:{
          }
        })
        .then((response) =>response.json())
        .then((response) =>{
          if(response.message) {
             alert(response.message);
             navigate('/profile');}
          if(response.Error) alert(response.Error)
        })
        
      } catch (error) {
        console.log(error)
      }
    }
    return (
    <>
        <section className="home3">
         <input type='text' placeholder="Enter the Username"  onChange={(e) => setUseName(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md 
          text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500
        disabled:border-slate-200 disabled:shadow-none"/> 
         <input type='text' placeholder="Enter the transaction ID"  onChange={(e) => setCode(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md 
          text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500
        disabled:border-slate-200 disabled:shadow-none"/> 
          <button onClick={handleSubmit} className='bg-green-600 rounded p-3 m-2'> Submit </button>
        </section>
    </>
  )
}

export default Recharge