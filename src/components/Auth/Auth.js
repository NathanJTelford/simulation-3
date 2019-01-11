import React, { Component } from 'react';
import axios from 'axios';


export default class auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            pic: ''
        }
    }

    
    async handleRegister(){
        const { username,password,pic } = this.state;
        let res =  await axios.post('/auth/register', {username:username, password:password, profile_pic:pic})
        if(res.data.loggedIn){
            this.props.history.push('/dashboard')
        }
    }
    
    
    async handleLogin() {
        const {username,password} = this.state;
        let res = await axios.post('/auth/login',{username:username,password:password})
        if(res.data.loggedIn){
            this.props.history.push('/dashboard')
        }
     }



    render() {
        return (
            <div>
                <span>Username:</span>
                <input placeholder='must be unique' onChange={(e) => this.setState({ username: e.target.value })} />
                <span>Password:</span>
                <input onChange={(e) => this.setState({ password: e.target.value })} />
                <span>Profile Picture:</span>
                <input placeholder='Optional' onChange={(e) => this.setState({ pic: e.target.value })} />
                <button onClick={()=>this.handleLogin()} >Login</button>
                <button onClick={()=>this.handleRegister()} >Register</button>
            </div>
        )
    }
}
