import React, { Component } from 'react'
import AddTodo from '../../../component/AddTodo'
import TodoList from '../../../component/TodoList'
import CompleteList from '../../../component/CompleteList'
import { connect } from 'react-redux'
import * as todoAction from '../../../action/todo'
import './style.scss'
import { SHOW_COMPLETE, SHOW_TODOS } from '../../../constants';
import * as control from '../../../action/control'

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
        const { filter, todos, complete, addTodo, check, uncheck, markStar} = this.props
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <AddTodo addTodo={addTodo}></AddTodo>
                <div className='list-container'>
                    <TodoList todos={todos}
                        markStar={markStar}
                        markFinished={check}
                    ></TodoList>
                    <span onClick={this.setVisibility}>查看已完成的事项</span>
                    {
                        filter === SHOW_COMPLETE && <CompleteList 
                        markStar={markStar}
                        markImcomplete={uncheck}
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
        setVisibilityFilter: (filter)=>dispatch(control.setVisibilityFilter(filter)),
        addTodo:({value, star, due})=>{
            console.log('value, star, due')
            console.log(value, star, due)
            const todo = {
                value,
                marked: star === true ? 1 : 0,
                due: due ? due.getTime() : null,
            }
            dispatch(todoAction.addTodo(todo))
        },
        check: (itemId)=>dispatch(todoAction.markAsChecked(itemId)),
        uncheck: (itemId)=>dispatch(todoAction.markAsUnchecked(itemId)),
        markStar: (itemId, stared)=>dispatch(todoAction.markStar(itemId, stared))
    }))(TodoArea);