import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link className="navbar-brand" to="/users">Git engine</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Users <span className="sr-only">(current)</span></a>
                        </li>
        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
