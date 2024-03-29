import React, { Component } from 'react'
import DisplayUsers from './DisplayUsers'
import axios from 'axios'
import SearchUser from './SearchUser'

class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }
    
    getUser = () => {
        axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    componentDidMount(){
        this.getUser();
    }

    SearchUsersFromGit = (data) =>  {
        if(data != ''){
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then(response => {
                    // console.log(response);
                    this.setState({
                        users: response.data.items
                    })
                })
        }
    }

    render() {

        return (
            <div>
                <div className="row my-2">
                    <div className="col-md-12">
                        <SearchUser getUserSearch={this.SearchUsersFromGit}/>
                    </div>
                </div>
                <div className="row">
                {this.state.users.map(user => (
                    <div className="col-md-4" key={user.id}>
                        <DisplayUsers user={user}   />
                    </div>
                ))}
                 </div>
            </div>
        );
    }
}

export default User
