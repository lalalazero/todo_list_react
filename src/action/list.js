import listApi from './../api/listApi'

import {
    LOAD_LISTS,
    CREAT_LIST_EVENT,
    UPDATE_LIST_EVENT,
    DELETE_LIST_EVENT,
    SET_CURRENT_LIST,
} from './../constants'

import * as todoAction from './todo'

export const getAll = async (dispatch,getState) => {
    const result = await listApi.queryAll()
    if (result && result.status === 0) {
        await dispatch({
            type: LOAD_LISTS,
            lists: result.data
        })
        await dispatch(todoAction.getTodos())
        
    }
}

export const setActive = (index) => (dispatch, getState) => {
    dispatch({
        type: SET_CURRENT_LIST,
        index,
    })
    const store = getState()
    todoAction.refreshTodos(index, dispatch)
    todoAction.refreshCompletes(index, dispatch, store)
}

export const create = (name) => async (dispatch,getState) => {
    const result = await listApi.create(name)
    if (result && result.status === 0) {
        await dispatch({
            type: CREAT_LIST_EVENT
        })
        const store = getState()
        const {list: { activeIndex }} = store
        todoAction.refreshTodos(activeIndex, dispatch)
        todoAction.refreshCompletes(activeIndex, dispatch, store)
    }
}

export const update = (name, id) => async (dispatch) => {
    const result = await listApi.update(id, name)
    if (result && result.status === 0) {
        await dispatch({
            type: UPDATE_LIST_EVENT
        })
        await dispatch(getAll)
    }
}

export const remove = (id) => async (dispatch,getState) => {
    const result = await listApi.delete(id)
    if (result && result.status === 0) {
        await dispatch({
            type: DELETE_LIST_EVENT // step1 删除 (todo 考虑做删除成功的提示)
        })
        await dispatch(getAll)    // step2 刷新清单列表
        const { list: { all, activeIndex }, } = getState()  
        const indexUpdated = (activeIndex - 1) % all.length
        
        await dispatch(setActive(indexUpdated)) // step3 重新设置 activeList，并刷新todos和completes
        
    }
}


