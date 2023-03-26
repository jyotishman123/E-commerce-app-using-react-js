import React,{useEffect} from 'react'
import Navbar from '../components/Navbar';
import SingleProductName from '../components/SingleProductName';
import SingleProDesc from '../components/SingleProDesc';
import Footer from './Footer';
 

import { useParams } from 'react-router-dom';
import { AllContex } from '../contex/Contex';
 


export default function SingleProduct() {
  const {getSingleProduct, singleProduct} = AllContex();
  let {id} = useParams();
  const API = `https://dummyjson.com/products/${id}`

 
  
useEffect(()=>{
   getSingleProduct(API);
   
},[])
 console.log(singleProduct)

  
 
  {
  return (
    <>
   
     <Navbar/>
    <SingleProductName product={singleProduct}/>
    <SingleProDesc products={singleProduct.images}   desc={singleProduct} />
    <Footer/>
   
      
    </>
  )
 }
}
