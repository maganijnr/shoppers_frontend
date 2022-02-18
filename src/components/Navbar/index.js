import './index.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar-container">
            <NavLink to="/" className="navbar-logo">Shoppers</NavLink>
            <div className="navbar-items">
               <NavLink 
                  to="/" 
                  className={({isActive})=> (isActive ? "navbar-active-link":"navbar-link")}
               >
                  Home
               </NavLink>
               <NavLink 
                  to="/products" 
                  className={({isActive})=> (isActive ? "navbar-active-link":"navbar-link")}
               >
                  Products
               </NavLink>
               <NavLink 
                  to="/cart" 
                  className={({isActive})=> (isActive ? "navbar-active-link":"navbar-link")}
               >
                  Cart
               </NavLink>
               <NavLink 
                  to="/profile" 
                  className={({isActive})=> (isActive ? "navbar-active-link":"navbar-link")}
               >
                  Profile
               </NavLink>
            </div>
         </div>
      </div>
   )
}

export default Navbar