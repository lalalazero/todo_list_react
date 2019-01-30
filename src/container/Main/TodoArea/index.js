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
    addTodo = ({value, star, due}) => {
        console.log('value, star, due')
        console.log(value, star, due)
    }
    render(){
        const { filter, todos, complete} = this.props
        console.log('todo Area this.props => ', this.props)
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <div className='list-container'>
                    <TodoList todos={todos}></TodoList>
                    <span onClick={this.setVisibility}>查看已完成的事项</span>
                    {
                        filter === SHOW_COMPLETE && <CompleteList complete={complete}></CompleteList>
                    }
                </div>
                
            </div>
        )
    }
}
export default connect(
    (state)=>({
        filter: state.visibilityFilter,
        // activeIndex: state.list.activeIndex,
        todos: state.todos.active,
        complete: state.todos.complete,
    }),
    (dispatch)=>({
        setVisibilityFilter: (filter)=>dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: filter
        })
    }))(TodoArea);