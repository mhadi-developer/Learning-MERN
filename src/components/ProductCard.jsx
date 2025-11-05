import React from 'react'
import cardImg from '../assets/card.png'
function ProductCard(props){
  return (
    <div>
       <div className="card my-3">
  <div className='card-img'>
    <img src={props.product.image} className="card-img-top" alt="..."/>
  </div>
  <div className="card-body text-center">
    <a href="#" className="btn btn-primary w-100 mb-3">Add to Cart</a>
    <h5 className="card-title">{props.product.title}</h5>
    <p className="card-text mb-1">{props.product.price}-RS</p>
    <span>⭐⭐⭐⭐⭐</span>
    </div>
   </div>
    </div>
  )
}

export default ProductCard
