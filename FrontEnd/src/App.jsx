import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Cart from './screens/Cart/Cart'
import PlaceOrder from './screens/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Verify from './screens/Verify/Verify'
import MyOrders from './screens/MyOrders/MyOrders'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {
      showLogin ? <LoginPopUp setShowLogin={setShowLogin}/>:<></>
    }
      <div className='app'>
        <ToastContainer/>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verify />}/>
        <Route path='/MyOrders' element={<MyOrders />}/>
        

      </Routes>
    </div>
    <Footer/>
    <ScrollUp/>
    </>
  )
}
export default App


