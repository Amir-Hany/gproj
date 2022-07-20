import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { History, About, Home, CurrentCart, Profile, Start, GettingStarted, Recharge } from './Pages';
import { Navbar, Footer, Burger} from './components'
import { useStateContext } from './context/ContextProvider';
const App = () => {
  
  return (
    <BrowserRouter>
        <Navbar />
          
        <Routes>
            <Route path="/" element={(<Home />)}/>
            <Route path="/home" element={(<Home />)}/>
            <Route path="/history" element={(<History />)}/>
            <Route path="/about" element={(<About />)}/>
            <Route path="/currentcart" element={(<CurrentCart />)}/>
            <Route path="/profile" element={(<Profile />)}/>
            <Route path="/start" element={(<Start />)}/>
            <Route path="/GettingStarted" element={(<GettingStarted />)}/>
            <Route path="/Recharge" element={(<Recharge />)}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App