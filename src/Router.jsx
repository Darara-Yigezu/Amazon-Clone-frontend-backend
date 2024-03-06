import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Element, Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51OpnBxLNNO1N510MNdAGyBRXiSByoFcbA7KPIBymH8yKJauLeqZ6njJJTQy4qIyBkHwe1IBDVIEy2hEtFbvEj3DK00UJyShKhI');


const Routing = () => {
  return (
       <Router>
           <Routes>           
              <Route path='/' element={<Landing/>}/>
              <Route path='/Auth' element={<Auth/>}/>
              <Route 
              path='/Payments' 
              element={
              <ProtectedRoute msg={"You must login to pay"} 
              redirect={"/payments"}>
                 
                 <Elements stripe={stripePromise}>
                   <Payment />
               </Elements>
              </ProtectedRoute>
             }/>
              
              <Route path='/orders' element={
               <ProtectedRoute
               msg={"You must log into your orders"}
                redirect={"/orders"}>
                <Orders/>
               </ProtectedRoute>
               }/>
              
              <Route path='/category/:categoryName' element={<Results/>}/>
              <Route path='/product/:productId' element={<ProductDetail/>}/>
              <Route path='/cart' element={<Cart/>}/>
           </Routes>
       </Router>
  )
}
export default Routing;
