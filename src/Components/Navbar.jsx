import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
function Navbar() {

  
  return (

    <header className="web-header">

      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="brand-name">
          J<span>&amp;</span>J
          <small> Candle &amp; Gypsum Art</small>
        </Link>

        <nav className="top-navbar">

         <Routes>

<Route path ="/" excat Component={Home}/>

<Route path ="/About" excat Component={About}/>

<Route path ="/Products" excat Component={Products}/>

<Route path ="/Reviews" excat Component={Reviews}/>
<Route path ="/Contact" excat Component={Contact}/>

</Routes>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;