import React,{useState,useEffect} from 'react';
import {commerce} from "../../lib/commerce";
import Products from "../Products/Products";

const Category = ({categoryName,onAddToCart}) =>{
    const[productsCategory,setProductsCategory]=useState([]);

    const fetchProductsCategory=async (categoryName) => {
     
        const {data} = await commerce.products.list({
          category_slug: [categoryName]
        });
        
   
      console.log(data);


      setProductsCategory(data);
  }


    useEffect(()=>{
        fetchProductsCategory(categoryName);
        
    });

    console.log(productsCategory);

    return(
        <div>
            <Products products={productsCategory} onAddToCart={onAddToCart} />
        </div>
    )
}

export default Category;


