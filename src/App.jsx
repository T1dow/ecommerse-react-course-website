import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import Checkout from "./pages/checkout.jsx"
import "./App.css"
import Navbar from "./components/navbar.jsx"




const App = () => {
  return <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/checkout" element={<Checkout/>} />



    </Routes>

  </div>
}

export default App;