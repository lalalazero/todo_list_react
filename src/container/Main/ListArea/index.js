import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoldList from '../../../component/FoldList'
import UserList from '../../../component/UserList'
import { SET_LIST_VISIBILITY, SET_CURRENT_LIST } from '../../../constants'
import * as listAction from '../../../action/list'
import { logout } from '../../../action/user'
import { bindActionCreators } from 'redux'
import './style.css'
import { list } from 'postcss';

class ListArea extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.history.push({
            pathname: '/tasks/inbox',
        })
        this.props.dispatch(listAction.getAll())
    }
    render(){
        const { visible, showList, foldList, lists, activeIndex, logout } = this.props
        return(
            <div className='list-area'>
                {
                    visible ? <UserList 
                    {...this.props} 
                    lists={lists}
                    activeIndex={activeIndex}
                    logout={logout}
                    onFold={foldList}>我是userList</UserList> : <FoldList 
                    {...this.props} 
                    onShow={showList}>我是foldList</FoldList> 
                }
            </div>
        )
    }
}
export default connect((state)=>({
    visible: state.control.listVisible,
    lists: state.list.all,
    activeIndex: state.list.activeIndex
}),dispatch => ({
    foldList: ()=>{
        dispatch({
            type: SET_LIST_VISIBILITY,
            payload: false,
        })
    },
    showList: ()=>{
        dispatch({
            type: SET_LIST_VISIBILITY,
            payload: true,
        })
    },
    logout: ()=>{
        dispatch(logout())
    }
}))(ListArea);