import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (<nav className="navbar navbar-light bg-light">
    <NavLink className="navbar-brand mb-0 h1" to="/">Home</NavLink>
    <NavLink className="navbar-brand mb-0 h1" to="/about">About</NavLink>
    <NavLink className="navbar-brand mb-0 h1" to="/contact">Contact</NavLink>
    <NavLink className="navbar-brand mb-0 h1 pull-right" to="/login">Login</NavLink>
  </nav>)
}
