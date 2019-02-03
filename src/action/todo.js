import todoApi from './../api/todoApi'
import { SHOW_COMPLETE, LOAD_COMPLETE, LOAD_TODOS } from '../constants';

export const getTodos = (index) => async (dispatch,getState) => {
    const { list: { all }} = getState()
    if(all.length > 0){
        const listId = all[index].id
        const result = await todoApi.getTodos(listId)
        if (result && result.status === 0) {
            dispatch({
                type: LOAD_TODOS,
                payload: result.data
            })
        }
    }
    
} 

export const getComplete = (index) => async (dispatch, getState) => {
    const { list: { all } } = getState()
    if(all.length > 0) {
        const listId = all[index].id
        const result = await todoApi.getComplete(listId)
        if (result && result.status === 0) {
            dispatch({
                type: LOAD_COMPLETE,
                payload: result.data
            })
        }
    }
    
}

export const markAsChecked = (itemId) => async (dispatch,getState) => {
    const result = await todoApi.markAsChecked(itemId)
    if (result && result.status === 0) {
        const { list: { activeIndex }, visibilityFilter} = getState()
        dispatch(getTodos(activeIndex))
        if (visibilityFilter === SHOW_COMPLETE) {
            dispatch(getComplete(activeIndex))
        }
    }
}

export const markAsUnchecked = (itemId) => async(dispatch, getState) => {
    const result = await todoApi.markAsUnchecked(itemId)
    if (result && result.status === 0) {
        const { list: { activeIndex }, visibilityFilter} = getState()
        dispatch(getTodos(activeIndex))
        if (visibilityFilter === SHOW_COMPLETE) {
            dispatch(getComplete(activeIndex))
        }
    }
}

export const markStar = (itemId, stared) => async(dispatch, getState) => {
    const result = await todoApi.markStar(itemId, stared)
    if (result && result.status === 0) {
        const { list: { activeIndex }, visibilityFilter} = getState()
        dispatch(getTodos(activeIndex))
        if (visibilityFilter === SHOW_COMPLETE) {
            dispatch(getComplete(activeIndex))
        }
    }
}

export const addTodo = (todo) => async(dispatch, getState) => {
    const { list: { activeIndex, all } } = getState()
    const listId = all[activeIndex].id
    const result = await todoApi.add(listId, todo)
    if (result && result.status === 0) {
        const { list: { activeIndex }} = getState()
        dispatch(getTodos(activeIndex))
    }
}

export const refreshTodos = (index) => dispatch => {
    dispatch(getTodos(index))
}

export const refreshCompletes = (index) => (dispatch, getState) =>{
    const { visibilityFilter } = getState()
    if (visibilityFilter === SHOW_COMPLETE) {
        dispatch(getComplete(index))
    }
}

