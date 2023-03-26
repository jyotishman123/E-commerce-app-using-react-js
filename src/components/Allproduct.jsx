import React,{useState} from 'react';
import { AllContex } from '../contex/Contex';
import AllProductComp from './AllProductComp';


export default function Allproduct() {
  const {allproducts,dispatch} = AllContex();
  const [text,setText] = useState("");
  
  
 
//    let product = [];
//    product = allproducts.products
//    console.log(allproducts)

  
 
  return (
   <>
   <div className=' w-[80%] mx-auto my-[4%]'>
    
   <div className='py-6 px-6 my-5 mx-6'> 
   <div  className='flex justify-between items-center'> 
    <h1 className='text-2xl my-[60px]'>ALL PRODUCT...</h1>
    <div> 
    <input type="text" className='border-2 h-[25px]' onChange={(e)=>{setText(e.target.value)
     
    }} />
    {/* <button className='bg-blue-600 text-white py-[2px] px-2 mx-2' onClick={handleSubmit}>Search</button> */}
    </div>
    </div>
      
      <div className='flex overflow-y-hidden  flex-wrap justify-center gap-6'>
           {/* {allproducts.map((ele, index)=>{
            return <AllProductComp item = {ele}  key={index}/>
           })} */}
   {allproducts.filter((item)=>{
     
    if(text == " "){
        return item
    }else{
        return (item.brand.toLowerCase().includes(text) || item.title.toLowerCase().includes(text) || item.category.toLowerCase().includes(text) )
    }
   }).map((ele,index)=>{
      return <AllProductComp item={ele} key={index}/>
   })}

      </div>
      </div>

   </div>
   </>
  )
}
