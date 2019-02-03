import listApi from './../api/listApi'

import {
    LOAD_LISTS,
    CREAT_LIST_EVENT,
    UPDATE_LIST_EVENT,
    DELETE_LIST_EVENT,
    SET_CURRENT_LIST,
    LOAD_COMPLETE,
    SET_VISIBILITY_FILTER,
    SHOW_TODOS,
} from './../constants'

import * as todoAction from './todo'

export const getAll = () => async (dispatch,getState) => {
    const result = await listApi.queryAll()
    if (result && result.status === 0) {
        await dispatch({
            type: LOAD_LISTS,
            lists: result.data
        })
        const { list: { activeIndex }} = getState()
        await dispatch(setActive(activeIndex))
        
    }
}

export const setActive = (index) => dispatch => {
    dispatch({
        type: SET_CURRENT_LIST,
        index,
    })
    dispatch(todoAction.refreshTodos(index))
    dispatch({
        type: LOAD_COMPLETE,
        payload: []
    })
    dispatch({
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_TODOS
    })
    //dispatch(todoAction.refreshCompletes(index))
}


export const create = (name) => async (dispatch,getState) => {
    const result = await listApi.create(name)
    if (result && result.status === 0) {
        await dispatch({
            type: CREAT_LIST_EVENT
        })
        await dispatch(getAll())
        // const store = getState()
        // const {list: { activeIndex }} = store
        // dispatch(todoAction.refreshTodos(activeIndex))
        // dispatch(todoAction.refreshCompletes(activeIndex))
    }
}

export const update = (name, id) => async (dispatch) => {
    const result = await listApi.update(id, name)
    if (result && result.status === 0) {
        dispatch({
            type: UPDATE_LIST_EVENT
        })
        dispatch(getAll())
    }
}

export const remove = (id) => async (dispatch) => {
    const result = await listApi.delete(id)
    if (result && result.status === 0) {
        dispatch({
            type: DELETE_LIST_EVENT // step1 删除 (todo 考虑做删除成功的提示)
        })
        // const { list: { all, activeIndex }, } = getState()  
        // const indexUpdated = (activeIndex - 1) % all.length
        // dispatch({
        //     type: SET_CURRENT_LIST,
        //     index: 
        // })
        dispatch(getAll())    // step2 刷新清单列表
        // const { list: { all, activeIndex }, } = getState()  
        // const indexUpdated = (activeIndex - 1) % all.length
        
        // await dispatch(setActive(indexUpdated)) // step3 重新设置 activeList，并刷新todos和completes
        
    }
}


