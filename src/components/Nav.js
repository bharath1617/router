import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () =>{
    return (
       <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
       </nav>
    )
}

export default Nav;

// const Nav = () =>{
//     return (
//         <nav>
//             <a href="/">Home</a>
//             <a href="/about">About</a>
//             <a href="/blogs">Blogs</a>
//         </nav>
//     )
// }