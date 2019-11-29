  
import React from "react";
import logo from '../images/nasaico.png'

const Header = () => (
   
  <div className={`container-fluid text-center pl-0 pr-0 pt-2 pb-2 text-white`}>
    <a className="uk-navbar-item uk-logo" href="/">
   <img src={logo} alt="NASA"/>
 </a>
  </div>

);

export default Header;