import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoldList from '../../../component/FoldList'
import UserList from '../../../component/UserList'
import './style.css'

class ListArea extends Component{
    render(){
        const { isFold } = this.props
        return(
            <div className='list-area'>
                {
                    isFold ? <FoldList>我是foldList</FoldList> : <UserList>我是userList</UserList>
                }
            </div>
        )
    }
}
export default connect((state)=>({
    isFold: state.control.isListFolded
}))(ListArea);