import listApi from './../api/listApi'

import {
    LOAD_LISTS,
    CREAT_LIST_EVENT,
    UPDATE_LIST_EVENT,
    DELETE_LIST_EVENT,
    SET_CURRENT_LIST,
    SHOW_COMPLETE
} from './../constants'

import * as todoAction from './todo'

export const getAll = async (dispatch,getState) => {
    const result = await listApi.queryAll()
    if (result && result.status === 0) {
        await dispatch({
            type: LOAD_LISTS,
            lists: result.data
        })
        
    }
}

export const create = (name) => async (dispatch) => {
    const result = await listApi.create(name)
    if (result && result.status === 0) {
        await dispatch({
            type: CREAT_LIST_EVENT
        })
        await dispatch(getAll)
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
        await dispatch({
            type: SET_CURRENT_LIST,
            index: indexUpdated // step3 更新 active 的清单
        })
        // 思考： 也许刷新 todo 不应该放在这里做，因为路由变化的时候会重新加载 todo 页面，因此在 todo 页面可以知道当前哪个list是active的
        // 不能在 todo 的component did mount 方法里根据路由信息拿到 index 去找出list的id
        // 因为这个时候 store 的 list=[] index=0 ，一定要在 list 的异步请求拿到之后再去更新 list 下面的 todo
        loadListItems()
    }
}

const loadListItems = (listId, dispatch, getState) => {
    dispatch(todoAction.getTodos(listId)) 
    if (shouldLoadComplete(getState())) {
        dispatch(todoAction.getComplete(listId))
    }
}

const shouldLoadComplete = (store) => {
    const { visibilityFilter } = store
    if (visibilityFilter === SHOW_COMPLETE) {
        return true
    }
    return false
}