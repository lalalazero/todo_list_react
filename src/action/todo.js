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
    let listId;
    if(activeIndex === 1 || activeIndex === 2){
        // 今天或者星标，添加到 inbox 计划箱
        listId = all[0].id
    }else{
        // 其他自定义清单
        listId = all[activeIndex].id
    }
    // listId = all[activeIndex].id
    const result = await todoApi.add(listId, todo)
    if (result && result.status === 0) {
        const { list: { activeIndex }} = getState()
        dispatch(getTodos(activeIndex))
    }
}

export const refreshTodos = (index) => dispatch => {
    console.log('refreshTodos index=',index)
    dispatch(getTodos(index))
}

export const refreshCompletes = (index) => (dispatch, getState) =>{
    const { visibilityFilter } = getState()
    if (visibilityFilter === SHOW_COMPLETE) {
        dispatch(getComplete(index))
    }
}

