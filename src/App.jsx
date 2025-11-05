
import './App.css'
import Nav from './components/nav'
import ProductCard from './components/ProductCard'
import { useState } from 'react'
import { products } from './data'

function App() {
// let [products,setProducts] = useState(products)
console.log(products);




return (
  <>
  <Nav/>

  <div className="container">
    <div className="row">
      {
        products.map(product=>(
          <div className="col-md-4">
           <ProductCard product={product}/>
      </div>
        ))
      }
    </div>
  </div>

  </>
)
 
}





export default App
