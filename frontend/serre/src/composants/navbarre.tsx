import React from 'react'
import './styles/navebarre.css'
function navbarre() {
  return (
    <div > 
      <nav className="navbar" id='navbar'>
        <div className="container-fluid"> 
          <img  src="./styles/user4.jpg" className='img' alt="" />  
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav> 
    </div>
  )
}

export default navbarre
