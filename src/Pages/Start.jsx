import { info } from 'autoprefixer';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useStateContext} from '../context/ContextProvider'
import {FcLock} from 'react-icons/fc'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Start = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [confirm_password, setConfPassword] = useState('')
  
  var token = null;

  
   async function signup(event){
    event.preventDefault();
    let code = {username, password, confirm_password, email, first_name, last_name};
    if (password !== confirm_password) {
      return alert("Please Re-enter your password and confirm it correctly")
    }
    console.log(JSON.stringify(code));
    let result = await fetch("https://smartcart-helwan.herokuapp.com/api/register", {
      method : "POST",
      headers:{
        
      },
      body: JSON.stringify(code)
    });
      result = await result.json();
      console.log(result);
      if (result.message === 'Succseccfully Registerd') {
        alert(result.message);
        switchMode(event);
      } else {
        alert('this username is already taken, please pick another one');
      }   
  }


  const switchMode = (event) => {
      event.preventDefault();
      setIsSignup((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
    }

  const {setIsLoggedIn} = useStateContext();
  const {setTokenn} = useStateContext();
  

  async function handleSubmit(event){
    event.preventDefault();
    let code = {username, password};
    console.log(JSON.stringify(code));
    let result = await fetch("https://smartcart-helwan.herokuapp.com/api/login", {
      method : "POST",
      headers:{
       
      },
      body: JSON.stringify(code)
    });
    result = await result.json();
    token = result.token;
    console.log(result);
    
    localStorage.setItem("user-info" ,JSON.stringify(result))
    if(token) {
      navigate('/');
      setIsLoggedIn(true);
      setTokenn(token);
      console.log("you are now logged in as ", result.email);
    }else{
      alert("Please re-enter your Password and/or check your Username");
    }
  }


  return (
    
    <div className='flex justify-center mt-5 p-5'>
      <form>
    {isSignup ? <h1 className='m-2 p-2'>signup <FcLock className='inline rounded bg-red-500'/></h1> : <h1 className='m-2 p-2'>Login <FcLock className='inline rounded bg-red-500'/> </h1>}
    {isSignup && (<input type='email' placeholder="Email"  onChange={(e) => setEmail(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>)} <br />
      <input type='text' placeholder="username"  onChange={(e) => setUserName(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/> <br />
    {isSignup && (<input type='text' placeholder="First Name"  onChange={(e) => setFirstName(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>)} {isSignup && <br />}
    {isSignup && (<input type='text' placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>)} {isSignup && <br />}
      <input type='password' placeholder="password"  onChange={(e) => setPassword(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/> <br />
    {isSignup && (<input type='password' placeholder="confirm password"  onChange={(e) => setConfPassword(e.target.value)} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>)} {isSignup && <br />}
    {isSignup ? <button onClick={signup} className='bg-green-400 rounded p-3 m-2'> signup </button> :
    <button onClick={handleSubmit} className='bg-green-600 rounded p-3 m-2'> Login </button> }
    <br/>
    <button onClick={switchMode} className='bg-orange-300 rounded p-3 m-2' >
        { isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign Up" }
    </button>
    </form>
    
</div>
  )
}

export default Start