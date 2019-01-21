import todoApi from './../api/todoApi'
import { SHOW_COMPLETE, LOAD_COMPLETE, LOAD_TODOS } from '../constants';

export const getTodos = (index) => async (dispatch,getState) => {
    const { list: all } = getState()
    const listId = all[index].id
    const result = await todoApi.getTodos(listId)
    if (result && result.status === 0) {
        await dispatch({
            type: LOAD_TODOS,
            payload: result.data
        })
    }
} 

export const getComplete = (index) => async (dispatch, getState) => {
    const { list: all } = getState()
    const listId = all[index].id
    const result = await todoApi.getComplete(listId)
    if (result && result.status === 0) {
        await dispatch({
            type: LOAD_COMPLETE,
            payload: result.data
        })
    }
}

export const markAsChecked = (itemId) => async (dispatch,getState) => {
    const result = await todoApi.markAsChecked(itemId)
    if (result && result.status === 0) {
        const { list: { current }, visibilityFilter} = getState()
        dispatch(getTodos(current))
        if (visibilityFilter === SHOW_COMPLETE) {
            dispatch(getComplete(current))
        }
    }
}