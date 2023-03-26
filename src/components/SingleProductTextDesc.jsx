import React from 'react';
import { AllContex } from '../contex/Contex';


export default function SingleProductTextDesc({description}) {
  const {cartdispatch , cart:{carts}} = AllContex();
  
   

 console.log(carts)



  console.log(description)
  return (
    <>
   <div>
    
     <h1 className='text-left text-3xl font-normal py-6 ' >{description.brand}</h1>
      <h2 className='text-xl font-light'>{description.category}</h2>
    </div> 
    

    <div className='my-6 py-6 text-lg font-normal'>
        <p>{description.description}</p>
    </div>

    <div>
        <h3 className='text-xl'>₹ {description.price}</h3>
        <h3 className='text-lg'> Stock left {description.stock}</h3>
        

  
    </div>

    <div className='my-6'>

        {/* <button className='bg-blue-900 py-2 px-2 rounded-md text-white font-medium'>
            Add to Cart
        </button> */}

        {carts.some((p) => p.id === description.id) ? (
            <button
            className='bg-red-700 py-2 px-2 rounded-md text-white font-medium'
              onClick={() =>
                cartdispatch({
                  type: "REMOVE_FROM_CART",
                  payload: description,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
            className='bg-blue-900 py-2 px-2 rounded-md text-white font-medium'
              onClick={() =>
                cartdispatch({
                  type: "ADD_TO_CART",
                  payload: description,
                })
              }
              
            >
              Add to Cart
            </button>
          )}
    </div>
    
    </>
  )
}
