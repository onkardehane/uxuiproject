import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () =>{
    return(
        <nav>
    <div class="nav-wrapper">
      <a href="./" class="brand-logo"><h1>HUSSLE</h1></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/"><h4>Home</h4></Link></li>
        <li><Link to="/BMI"><h4>BMI</h4></Link></li>
        <li><Link to="/Exercise"><h4>Exercise</h4></Link></li>
        <li><Link to="#!"><h4>Calorie Counter</h4></Link></li>
        <li><Link to="/Find_gym"><h4>Find Gym</h4></Link></li>

        

      </ul>
    </div>
  </nav>
    )
}
export default Navbar;