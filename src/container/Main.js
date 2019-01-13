import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        const { userInfo } = this.props
        const { isAuthed,isLogging } = userInfo
        console.log(`Main 组件...isAuthed=${isAuthed},isLogging=${isLogging}`)
        if(isLogging){
            return(
                <div>正在登陆中...</div>
            )
        }
        const authed = ()=>{
            return(
                <div>
                    <h1>Main</h1>
                    <p>userInfo.isAuthed = {JSON.stringify(userInfo)} </p>
                </div>
            )
        } 
        const redirect = <Redirect to={{pathname: '/login'}}></Redirect>
        return(
            isAuthed ? authed() : redirect
        )
    }
}

function mapStateToProps(state){
    const { userInfo } = state
    return {
        userInfo
    }
}
export default connect(mapStateToProps)(Main)