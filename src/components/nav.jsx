import { useState } from "react";

export default function Nav() {
  let [showmenue,setShowMeanue]= useState(false)
  function handelToggle(){
    setShowMeanue(!showmenue);
  }
  return <>
  <div className=Name="navbar-wrapper">
      <nav className=Name="navbar navbar-expand-lg navbar-light bg-light">
  <div className=Name="container">
    <a className=Name="navbar-brand" href="#">E-Shop</a>
    <button className=Name="navbar-toggler" type="button" onClick={handelToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
        showmenue ? <i className=Name="bi bi-x-lg"></i>:<span className=Name="navbar-toggler-icon"></span>
      }
    </button>
    <div className=Name={`collapse navbar-collapse ${showmenue? 'show':''}`} id="navbarSupportedContent">
      <ul className=Name="navbar-nav me-auto mb-2 mb-lg-0">
        <li className=Name="nav-item">
          <a className=Name="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className=Name="nav-item">
          <a className=Name="nav-link" href="#">About</a>
        </li>
       
        <li className=Name="nav-item">
          <a className=Name="nav-link " href="#">Services</a>
        </li>
      </ul>
       <ul className=Name="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className=Name="nav-item">
          <a className=Name="nav-link " aria-current="page" href="#"><i className=Name="bi bi-person"></i></a>
        </li>
        <li className=Name="nav-item">
          <a className=Name="nav-link" href="#"><i className=Name="bi bi-cart"></i></a>
        </li>
       
        <li className=Name="nav-item">
          <a className=Name="nav-link " href="#"><i className=Name="bi bi-search"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  </>;
}
