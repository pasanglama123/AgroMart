import react from 'react';
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/login/Login.jsx';
import Signup from './Components/signup/Signup.jsx'
import Product from './Components/product/Product.jsx'
import ProductDescription  from './Components/product/ProductDescription.jsx'
import Shop from './Components/shop/Shop.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';


function App() {
  
  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path="/shop" element={<Shop/>}/>
        {/* <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/productDescription' element={<ProductDescription/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
