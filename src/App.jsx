import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import Checkout from "./pages/checkout.jsx"
import "./App.css"
import Navbar from "./components/navbar.jsx"
import AuthProvider from "./context/Authcontext.jsx"
import ProductDetails from "./pages/productDetails.jsx"




const App = () => {
  
  return (
  <AuthProvider>
  <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/products/:id" element={<ProductDetails/>} />




    </Routes>

  </div>
  </AuthProvider>
  )
}

export default App;