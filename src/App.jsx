
import './App.css'
import Nav from './components/nav'
import ProductCard from './components/ProductCard'
import { useState } from 'react'

function App() {





return (
  <>
  <Nav/>



  <div className="container">
    <div className="row">
      <div className="col-md-4">
           <ProductCard/>
      </div>

       <div className="col-md-4">
           <ProductCard/>
      </div>

       <div className="col-md-4">
           <ProductCard/>
      </div>
    </div>
  </div>

  </>
)
 
}





export default App
