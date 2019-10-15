import React, { Component } from 'react'
import axios from 'axios';
import DisplayUsers from './DisplayUsers'

class Useritems extends Component {

    state = {
        user: {}
    }

    componentWillMount(){
      const login =   this.props.match.params.login;
      axios.get(`https://api.github.com/users/${login}`)
        .then(res => {
            // console.log(res.data);
            this.setState({
                user: res.data
            })
        })
    }

    render() {
        console.log(this.state);
        const {user} = this.state;
        return (
            <div>
               <DisplayUsers user={user} />
            </div>
        )
    }
}

export default Useritems
