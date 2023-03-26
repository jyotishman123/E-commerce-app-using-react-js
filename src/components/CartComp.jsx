import React,{useState,useEffect} from 'react';
import { AllContex } from '../contex/Contex';
 


export default function CartComp() {
  const {cartdispatch , cart:{carts}} = AllContex();
  console.log(carts)
 
 const [total,setTotal] = useState()

 useEffect(()=>{
    setTotal(
        carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
 },[carts])
 
 if(carts.length<1){
    return(
         
         <div className='w-[full] h-[100vh] flex justify-center items-center'>
         <h1 className='text-3xl font-bold'>  Your Cart is Empty  </h1>
          
         </div>
          
    )
 }
   
 
  return (
    <div className=' w-[80%] mx-auto my-[1%]'>
       <div className='py-4 px-6 my-4 mx-6'> 
    <h1 className='text-2xl my-[60px]'>CART...</h1>

  <div> 

    {carts.map((ele)=>{
        return(
             <div className='my-5 border-2 py-2 px-2  flex justify-around items-center'>
             <img src={ele.images[0]} className="w-[120px] h-[90px]" alt="" />
             <div> 
               <h2 className='text-lg'>{ele.title}</h2>  
               <h2>{ele.category}</h2>  

               </div> 
               <div>
                <h3 className='text-lg'>$ {ele.price}</h3>
               </div>
               <div className='flex'>
                 <p className='text-lg font-semibold cursor-pointer mx-2' onClick={()=>{
                    cartdispatch({
                        type:"CHANGE",
                        id:ele.id,
                        qty:ele.qty + 1
                    })
                 }} >+</p>
                 <p className='text-xl mx-2'>{ele.qty}</p>
                 <p className='text-lg font-semibold  cursor-pointer mx-2' onClick={()=>{
                    
                    cartdispatch({
                        type:"CHANGE",
                        id:ele.id,
                        qty:ele.qty - 1
                    })

                    if(ele.qty <= 1){
                         return;
                   }

                 }} >-</p>
               </div>
               <div>
                <button className='text-white font-semibold bg-red-700 py-1 px-2 rounded-lg' onClick={()=>{
                     cartdispatch({
                        type: "REMOVE_FROM_CART",
                        payload:ele,
                      })
                }} >
                    Remove
                </button>
               </div>
         
         </div>
        )
    })}
    </div>
 <hr />
 <div>
    <h1 className='text-2xl'>Your Total is:  <span className='text-3xl font-semibold'>{total}</span></h1>
 </div>
    </div>
     </div>
  )
}
