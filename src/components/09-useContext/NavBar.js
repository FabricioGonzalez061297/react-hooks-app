import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/"  className="navbar-brand" >Context App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink activeClassName="active"  exact to="/" className="nav-link active" aria-current="page" >Inicio</NavLink>
              <NavLink exact activeClassName="active"  to="/login" className="nav-link" >Login</NavLink>
              <NavLink exact activeClassName="active"  to="/about" className="nav-link" >About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
}
