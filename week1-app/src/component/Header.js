import React from 'react'
const Header = ()=> {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <a className="navbar-brand text-white" href="/#"><span className='display-6'>LOGO</span> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item active">
        <a className="nav-link text-white display-6 " href="/#">Home </a>
      </li>
      <li className="nav-item o">
        <a className="nav-link text-white display-6" href="/#">About</a>
      </li>
      <li className="nav-item  mb-2 mb-lg-0 display-6">
        <a className="nav-link  text-white" href="/#">Contact</a>
      </li>
    </ul>
 
  
  </div>
</nav>

        </div>
    )
}
export default Header