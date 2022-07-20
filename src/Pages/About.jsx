import React from 'react'
import amir from '../images/Amir.jpeg'
import ashraf from '../images/asrafpic.png'
import ki from '../images/ki.jpeg'
import mahy from '../images/Mahy.jpeg'
import nabil from '../images/nabil.jpeg'
import {useStateContext} from '../context/ContextProvider'
import { useEffect } from "react";
const About = () => {
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
        <h1 className="text-xl">Here is the team of Engineers working behind the scene to ensure everything is working properly</h1>
      </div>
    </section>
    
    <section className="features" id="features">
        <div className="box-container">

          <div className="box2">
            <img src={amir} alt="Amir" className='contained'/>
              <h3>Amir Georges</h3>
              <p>In charge of the front-end 'UI and UX'</p>
            </div>

            <div className="box3">
            <img src={ashraf} alt="Ashraf"/>
              <h3>Mohamed Ashraf</h3>
              <p>In charge of the Embedded system and Hardware</p>
            </div>

            <div className="box2">
            <img src={nabil} alt="Nabil"/>
              <h3>Mohamed Nabil</h3>
              <p>In charge of the backend and database</p>
            </div>

          <div className="box2">
            <img src={mahy} alt="Mahinour" />
              <h3>Mahinour Ezz</h3>
              <p>In charge of the recommendation system</p>
              
            </div>

          <div className="box2">
            <img src={ki} alt="ki" />
              <h3>Kirolos Maged</h3>
              <p>In charge of the cloud and integrations</p>
              
          </div>

        </div>

      </section>
    </>
  )
}

export default About