import React, { Component } from 'react'
import AddTodo from '../../../component/AddTodo'
import TodoList from '../../../component/TodoList'
import CompleteList from '../../../component/CompleteList'
import { connect } from 'react-redux'
import { addTodo } from '../../../action/todo'
import { setActive } from '../../../action/list'
import './style.scss'
import { SET_VISIBILITY_FILTER, SHOW_COMPLETE, SHOW_TODOS } from '../../../constants';

class TodoArea extends Component{

    componentDidMount(){
        // console.log('查询 todos')
    }

    setVisibility = () => {
        const { filter, setVisibilityFilter } = this.props
        if (filter === SHOW_COMPLETE) {
            setVisibilityFilter(SHOW_TODOS)
        } else {
            setVisibilityFilter(SHOW_COMPLETE)
        }
    }
    
    markStar=(todo, stared)=>{
        console.log('enter markStar ,todo = ', todo)
        console.log('stared = ', stared)
    }
    markTodoStatus=(todo, status)=>{
        console.log('enter markTodoStatus , todo = ', todo)
        console.log('status = ', status)
    }
    render(){
        const { filter, todos, complete, addTodo} = this.props
        console.log('todo Area this.props => ', this.props)
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <AddTodo addTodo={addTodo}></AddTodo>
                <div className='list-container'>
                    <TodoList todos={todos}
                        markStar={this.markStar}
                        markFinished={this.markTodoStatus}
                    ></TodoList>
                    <span onClick={this.setVisibility}>查看已完成的事项</span>
                    {
                        filter === SHOW_COMPLETE && <CompleteList 
                        markStar={this.markStar}
                        markImcomplete={this.markTodoStatus}
                        complete={complete}></CompleteList>
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
        list: state.list.all,
        activeIndex: state.list.activeIndex,
    }),
    (dispatch)=>({
        setVisibilityFilter: (filter)=>dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: filter
        }),
        addTodo:({value, star, due})=>{
            console.log('value, star, due')
            console.log(value, star, due)
            const todo = {
                value,
                marked: star === true ? 1 : 0,
                due: due ? due.getTime() : null,
            }
            dispatch(addTodo(todo))
        },
    }))(TodoArea);