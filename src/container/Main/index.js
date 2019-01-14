import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ListArea from './ListArea'
import TodoArea from './TodoArea'
import Detail from './Detail'
import './style.css'

class Home extends Component {
    render(){
        const { isLogged, isLogging, user, isShowDetail } = this.props
        const redirect = <Redirect to={{pathname: '/login'}}></Redirect>
        return(
            isLogging ? '' : ( isLogged ? (
                <div name='Home' className='home'>
                    <ListArea></ListArea> 
                    <TodoArea></TodoArea>
                    {
                        isShowDetail && <Detail></Detail>
                    }
                </div>
            ) : redirect)
        )
    }
}

function mapStateToProps(state){
    return {
        isLogged: state.userInfo.isLogged,
        isLogging: state.userInfo.isLogging,
        user: state.userInfo.currentUser
    }
}
export default connect(mapStateToProps)(Home)