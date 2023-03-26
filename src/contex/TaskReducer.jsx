import React from 'react'

export  function TaskReducer(state,action) {
       switch(action.type){
        case 'ALL_PRODUCT':{
           return (
            {...state, allproducts: action.payload.products}
            )
            

        }
        case 'FEATURE':{
            
          let filterProduct = action.payload;
          
          let rating = filterProduct.products.filter((ele)=>{
            return ele.rating > 4.8
          })
           
           return(
            {
              ...state, featuredProduct:rating
            }
           )
          
           
        }

        case 'PHONE':{
           let filterProduct = action.payload;
           let phones = filterProduct.products.filter((ele)=>{
              return ele.category === "smartphones"
           })
           return(
            {
              ...state, smartPhone:phones
            }
           )
      }

        case 'SINGLE_PRODUCT':{
            return(
              {...state, singleProduct:action.payload}
            )
        }

        
        
       }
}


export function CartReducer(state,action){
     switch(action.type){
        case 'ADD_TO_CART':{
            
          return { ...state, carts: [...state.carts, { ...action.payload, qty: 1 }] };
        }
        case 'REMOVE_FROM_CART':{
          return {
            ...state,
            carts: state.carts.filter((c) => c.id !== action.payload.id),
          };
        }
        case "CHANGE":
          return {
            ...state,
            carts: state.carts.filter((c) =>
              c.id === action.id ? (c.qty = action.qty) : c.qty
            ),
          };
          
     }
}