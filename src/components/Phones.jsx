import React from 'react';
import { AllContex } from '../contex/Contex';
import PhoneComp from './PhoneComp';


export default function Phones() {
    const {smartPhone} = AllContex();
    console.log(smartPhone)
    return (
      <>
      <div className='py-6 px-6 my-5 mx-6'> 
      <h1 className='text-2xl'>SMARTPHONE...</h1>
        
        <div className='flex  my-6 mx-6 py-6'>
             {smartPhone.map((ele, index)=>{
              return <PhoneComp item = {ele}  key={index}/>
             })}
        </div>
  
      </div>
      </>
    )
}
