import React from 'react'
import {Link} from 'react-router-dom' 





export default function Navbar(props) {
    
  return (
    <>
    <div className="className"  >
    <div className="abc"></div>
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand"  to ="https://www.crazygames.com/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"   to ="#">Home</Link>
          </li>
          <li className="nav-item"  >
            <Link className="nav-link"  to ="#">about</Link>
          </li>
          
        </ul>
        <div className={`form-check form-switch mx-1 text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label  mx-3" htmlFor="flexSwitchCheckDefault  ">enable light mode</label>
</div>
        <form className="d-flex" role="search">
         
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
    
  </nav>
  </div>  
  </>

    
  )
}
