import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_TODOS } from '../constants/VisibilityFilter'

const visibilityFilter = (state = SHOW_TODOS,action)=>{
    switch(action.type){
        case SET_VISIBILITY_FILTER: return action.filter
        default: return state
    }
}

export default visibilityFilter;