import React, { Component } from 'react'
import AddTodo from '../../../component/AddTodo'
import TodoList from '../../../component/TodoList'
import CompleteList from '../../../component/CompleteList'
import { connect } from 'react-redux'
import './style.scss'
import { SET_VISIBILITY_FILTER, SHOW_COMPLETE, SHOW_TODOS } from '../../../constants';

class TodoArea extends Component{
    setVisibility = () => {
        const { filter, setVisibilityFilter } = this.props
        if (filter === SHOW_COMPLETE) {
            setVisibilityFilter(SHOW_TODOS)
        } else {
            setVisibilityFilter(SHOW_COMPLETE)
        }
    }
    render(){
        const { filter } = this.props
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <AddTodo></AddTodo>
                <div className='list-container'>
                    <TodoList></TodoList>
                    <span onClick={this.setVisibility}>查看已完成的事项</span>
                    {
                        filter === SHOW_COMPLETE && <CompleteList></CompleteList>
                    }
                </div>
                
            </div>
        )
    }
}
export default connect(
    (state)=>({
        filter: state.visibilityFilter
    }),
    (dispatch)=>({
        setVisibilityFilter: (filter)=>dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: filter
        })
    }))(TodoArea);