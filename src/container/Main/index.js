import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ListArea from './ListArea'
import TodoArea from './TodoArea'
import Detail from './Detail'
import { Route } from 'react-router-dom'
import './style.css'

class Home extends Component {
    render(){
        const { isLogged, isLogging, user, detailVisible } = this.props
        const redirect = <Redirect to={{pathname: '/todo/login'}}></Redirect>
        return(
            isLogging ? '' : ( isLogged ? (
                <div name='Home' className='home clearfix'>
                    <ListArea {...this.props}></ListArea>
                    <Route path="/todo/tasks/:list" exact component={TodoArea} />
                    {/* <TodoArea></TodoArea> */}
                    {
                        detailVisible && <Detail></Detail>
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
        user: state.userInfo.currentUser,
        detailVisible: state.control.detailVisible
    }
}
export default connect(mapStateToProps)(Home)