import { SET_VISIBILITY_FILTER, RAISE_MSG } from '../constants'
import { refreshCompletes } from './todo'
export const setVisibilityFilter = (filter)=>(dispatch,getState)=>{
    dispatch({
        type: SET_VISIBILITY_FILTER,
        filter: filter
    })
    const { list: { activeIndex }} = getState()
    dispatch(refreshCompletes(activeIndex))
    
}

export const setMsg = (msg) => dispatch => {
    dispatch({
        type: RAISE_MSG,
        msg: msg
    })
}
