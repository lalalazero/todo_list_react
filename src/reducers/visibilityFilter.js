import { SET_VISIBILITY_FILTER } from '../constants'
import { SHOW_TODOS } from '../constants'

const visibilityFilter = (state = SHOW_TODOS,action)=>{
    switch(action.type){
        case SET_VISIBILITY_FILTER: return action.filter
        default: return state
    }
}

export default visibilityFilter;