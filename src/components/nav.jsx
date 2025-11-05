import { useState } from "react";

export default function Nav(props) {


  console.log('i am in nav component',props);
  
  let [showmenue,setShowMeanue]= useState(false)
  function handelToggle(){
    setShowMeanue(!showmenue);
  }
  return <>
  <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">E-Shop</a>
    <button className="navbar-toggler" type="button" onClick={handelToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
        showmenue ? <i className="bi bi-x-lg"></i>:<span className="navbar-toggler-icon"></span>
      }
    </button>
    <div className={`collapse navbar-collapse ${showmenue? 'show':''}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " href="#">Services</a>
        </li>
      </ul>
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><i className="bi bi-person"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " href="#"><i className="bi bi-search"></i></a>
        </li>
          <li className="nav-item">
          <a className="nav-link " href="#">{props.num}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  </>;
}
