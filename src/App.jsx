import react from 'react';
import './App.css'
// import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx'
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';

function App() {
  
  return (
    <>
    {/* <Navbar/> */}
    <Routers>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Routers>
    </>
  )
}

export default App
