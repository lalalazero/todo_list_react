import listApi from './../api/listApi'

import {
    LOAD_LISTS,
    CREAT_LIST_EVENT,
    UPDATE_LIST_EVENT,
    DELETE_LIST_EVENT
} from './../constants'

export const getAll = async (dispatch) => {
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

export const remove = (id) => async (dispatch) => {
    const result = await listApi.delete(id)
    if (result && result.status === 0) {
        await dispatch({
            type: DELETE_LIST_EVENT
        })
        await dispatch(getAll)
    }
}