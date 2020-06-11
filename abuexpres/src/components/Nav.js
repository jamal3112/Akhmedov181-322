import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import Auth from './Auth'

const Nav = () => {
  return (
    <Navbar className="justify-content-between" bg="light" variant="light" expand="lg"  sticky="top">
      <NavLink to="/"><Navbar.Brand>Abuexpress</Navbar.Brand></NavLink>
      <div className="float-right">
        <Auth />
      </div>
    </Navbar>
  )
}


export default Nav
