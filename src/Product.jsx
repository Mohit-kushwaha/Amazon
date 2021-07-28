import React from 'react'
import './Product.css'
import {useStateValue} from './State_provider';
const Product = ({id,title,price,rating,image}) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket=()=>{
        dispatch({
             type:"Add_to_Basket",
             item:{
                 id:id,
                 image:image,
                title:title,
                price:price,
                rating:rating,
             }
        }) 
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>{
                        <p> 🌟  </p>
                    })}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
