import React from 'react'
import {useStateContext} from '../context/ContextProvider'
import { useEffect } from "react";
const GettingStarted = () => {
  const {setIsLoggedIn} = useStateContext();
  
  useEffect(() => {
      const log = localStorage.getItem("user-info");
      if (log) {
        setIsLoggedIn(true);
      }
    }, []);
    
  return (
    <>
      <section >
        <div className="content">
          <h1 className="text-xl">This is a <p className='orang inline'>Quick</p> introduction for new users about how to get started using our Smart Shopping Cart</h1><br/>
        </div>
        <div id='cut'>Step 1</div> <br/>
        <br/><p>Pick an available cart from the ones in the store</p><br/>
        <div id='cut'>Step 2</div> <br/>
        <br/><p>To reserve a cart head to "My current cart" from the Navigation bar</p><br/>
        <div id='cut'>Step 3</div> <br/>
        <br/><p>Logging in requires a 2-step verification, step 1 is scanning the login barcode on the cart, and then step 2 is clicking on "Connect to a cart" button on the website</p><br/>
        <div id='cut'>Step 4</div> <br/>
        <br/><p>Don't worry if login failed, only an alert message will appear</p><br/>
        <div id='cut'>Step 5</div> <br/>
        <br/><p>Enjoy your shopping!</p><br/>
        <div id='cut'>Step 6</div> <br/>
        <br/><p>Logging out requires the same 2-step verification as the login procedure</p><br/>
        <div id='cut'>Step 7</div> <br/>
        <br/><p>To log out, step 1 scan the logout barcode on the cart, and then step 2 click on "Logout of the cart" on the website</p><br/>
        <div id='cut'>Step 8</div> <br/>
        <br/><p>Once the logout is successful, an informing message will be displayed, and your history and balance will be updated</p><br/>
    </section>
    </>
  )
}

export default GettingStarted