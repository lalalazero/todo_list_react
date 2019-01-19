import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoldList from '../../../component/FoldList'
import UserList from '../../../component/UserList'
import { SET_LIST_VISIBILITY } from '../../../constants'
import './style.css'

class ListArea extends Component{
    render(){
        const { visible, showList, foldList } = this.props
        return(
            <div className='list-area'>
                {
                    visible ? <UserList onFold={foldList}>我是userList</UserList> : <FoldList onShow={showList}>我是foldList</FoldList> 
                }
            </div>
        )
    }
}
export default connect((state)=>({
    visible: state.control.listVisible
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
    }
}))(ListArea);