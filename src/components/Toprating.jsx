import React from 'react';
import { AllContex } from '../contex/Contex';
import RatingComp from './RatingComp';


export default function Toprating() {

  const {featuredProduct} = AllContex();
  console.log(featuredProduct)
  return (
    <>
    <div className='py-6 px-6 my-5 mx-6'> 
    <h1 className='text-2xl'>TOP RATING...</h1>
      
      <div className='flex  my-6 mx-6 py-6'>
           {featuredProduct.map((ele, index)=>{
            return <RatingComp item = {ele}  key={index}/>
           })}
      </div>

    </div>
    </>
  )
}
