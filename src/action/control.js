import { SET_VISIBILITY_FILTER } from '../constants'
import { refreshCompletes } from './todo'
export const setVisibilityFilter = (filter)=>(dispatch,getState)=>{
    dispatch({
        type: SET_VISIBILITY_FILTER,
        filter: filter
    })
    const { list: { activeIndex }} = getState()
    dispatch(refreshCompletes(activeIndex))
    
}