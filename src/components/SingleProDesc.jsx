import React,{useState} from 'react'
import SingleProductTextDesc from './SingleProductTextDesc'
export default function SingleProDesc({products, desc}) {

  const [activeImg, setActiveImg] = useState(0)
    
  if(!products){

    return  (
      <div className='h-[100vh] w-full flex items-center justify-center '>
            <h1 className='text-3xl'>Loading</h1>
      </div>
    )
  }


   
 
 
  return(
     <>
     
     <div className='h-full w-full flex item-center justify-center my-6 '> 
     <div className='h-[450px] w-[60%] py-6 px-6 '> 

             <div className='flex'>

                 <div className='basis-1/2'>
                     <img src={products[activeImg]} className='w-[350px] h-[350px] m-auto' alt="" />

                     <div className='flex  w-[100%]   justify-around my-6'>
                           {products.map((img, i)=>{
                            return(
                              <img src={img} alt='' key={i} className='w-[60px] h-[60px] cursor-pointer' onClick={()=>{setActiveImg(i)}}  />
                            )
                           })}
                     </div>

                 </div>

                 <div className='basis-1/2  '>
                       <div>
                        <SingleProductTextDesc description={desc}/>
                       </div>
                 </div>

             </div>
     </div>
     </div>
     </>
  )
}
