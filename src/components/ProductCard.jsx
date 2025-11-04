import React from 'react'
import cardImg from '../assets/card.png'
function ProductCard(){
  return (
    <div>
       <div class="card">
  <img src={cardImg} class="card-img-top" alt="..."/>
  <div class="card-body text-center">
    <a href="#" class="btn btn-primary w-100 mb-3">Add to Cart</a>
    <h5 class="card-title">Card title</h5>
    <p class="card-text mb-1">PKR 789.99/RS</p>
    <span>⭐⭐⭐⭐⭐</span>
    </div>
   </div>
    </div>
  )
}

export default ProductCard
