import React from "react";
import {Navbar} from "react-bootstrap";

const List= () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown>Dropdown"/>
        <div className="dropdown-menu">…</div>
      </li>
      <li className= "nav-item">
        <a className= "nav-link disabled" href="#">Disabled
        </a>
      </li>
                    </ul>
                /*<form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="Search">
                        <button className="btn btn-outline-success" type="submit">Search
                        </button>
                </form>*/
            </div>
        </nav>

</header>
    )
}