import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import getUserData from './../../Ducks/user'


export default class dashboard extends Component{
    constructor(){
        super()
        this.state={
            post:''
        }
    }

  async componentDidMount(){
    try{
       const res = await axios.get('/api/user-data')
       this.props.getUserData(req,res);
    }catch(e){
        console.log('User Not Logged In', e)
    }
    }




    render(){
        const {username, profile_pic} = this.props.user;
        // let comment = 

        return(
            <div>
                <div className='search-bar'>
                <span><input/></span>
                </div>
                <div className='comments-log' >
                
                </div>

            </div>
        )
    }
}

const mapState = (reduxState) = 'reduxState';
export default connect(mapState,{getUserData})(dashboard)