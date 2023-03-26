import React,{useReducer,useContext,createContext,useEffect} from 'react';
import {TaskReducer, CartReducer} from './TaskReducer';


const AllProductContex = createContext()

export default function Contex({children}) {

    let api = 'https://dummyjson.com/products';


    let initialState = {
        allproducts:[],
        featuredProduct:[],
        singleProduct: {},
        smartPhone:[],
    }

    const getallProduct = (api) =>{
        fetch(api)
        .then(res => res.json())
        .then(json =>{
          dispatch({type:"ALL_PRODUCT", payload:json})
    dispatch({type:'FEATURE',payload: json})
    dispatch({type:'PHONE',payload: json})

    

        })

        

    }

    const getSingleProduct = (API) =>{
        
fetch(API)
.then(res => res.json())
.then(json => dispatch({type:'SINGLE_PRODUCT', payload:json}))   

    }
    

    useEffect(()=>{
      getallProduct(api)
    },[])

   
  let initialcart = {
    carts:[]
  }

  const [allProduct, dispatch] = useReducer(TaskReducer, initialState);
  const [cart, cartdispatch] = useReducer(CartReducer,initialcart);


     
      
   
  return (
      <AllProductContex.Provider value={{...allProduct, dispatch, getSingleProduct, cart , cartdispatch}}>
        {children}
      </AllProductContex.Provider>
  )
}


export function AllContex(){
  return useContext(AllProductContex)
}
