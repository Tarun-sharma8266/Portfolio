import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <header className="header_area  " style={{ height: "30px"}}>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav  justify-content-end">
                                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="aboutme">About Me</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="projects">Projects</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="contacts">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
