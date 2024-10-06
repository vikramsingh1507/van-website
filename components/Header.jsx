import React from "react"
import icon from "../assets/images/user-circle-icon.png"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : ""}>
                Host
            </NavLink>
            <NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : ""}>
                Vans
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>
                About
            </NavLink>
            <Link to="login" className="logo-link">
                <img 
                    src={icon}
                    className="login-icon"
                />
            </Link>
        </nav>
      </header>
    )
}