import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class DisplayUsers extends Component {
    
    render() {
        const {avatar_url, login, html_url, repos_url}  = this.props.user;
        return (
            <div>
                 <div className="card">
                            <img className="card-img-top" src={avatar_url} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{login}</h4>
                                <p className="card-text">
                                    <Link to={'users/'+login} className="btn btn-success" >Show more</Link>
                                    <Link to={repos_url} className="btn btn-warning" >Repositories</Link>
                                </p>
                        </div>
                </div>
            </div>
        )
    }
}

export default DisplayUsers
