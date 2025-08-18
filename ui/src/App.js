import Navbar from "./Components/HomePage/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Product from "./Components/Products/Product";
import ProductDescription from "./Components/ProductDescription/ProductDescription";
import Checkout from "./Components/CheckoutPage/Checkout";
import Login from "./Components/login_register/Login";
import Register from "./Components/login_register/Register";
import './App.css'

import { Route, Routes } from "react-router-dom";

function App(){
    return(
        
            <>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:type/" element={<Product />} />
                    <Route path="/productdescription/:id" element={<ProductDescription />} />
                    <Route path="/checkout/" element={<Checkout />} />
                    <Route path="/login/" element={<Login/>} />
                    <Route path="/register/" element={<Register/>} />
                </Routes>

            </>
        
    );
}
export default App;