import Home from "./pages/Home";
 
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Contex from "./contex/Contex";

function App() {
  return (
    <>
     
 
    <Contex> 
  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product/:id" element={ <SingleProduct/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/product" element={ <Product/> } />
         



         
      </Routes>

     </Contex>
    
    </>
  );
}

export default App;
