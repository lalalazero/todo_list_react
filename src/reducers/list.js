import {
    LOAD_LISTS,
    SET_CURRENT_LIST,
    DELETE_LIST_EVENT,
} from './../constants'


const list = (state = {
    all: [],
    activeIndex: 0,
}, action) => {
    switch(action.type){
        case LOAD_LISTS: {
            return {
                ...state,
                all: action.lists
            }
        }
        case SET_CURRENT_LIST: {
            return {
                ...state,
                activeIndex: action.index
            }
        }
        case DELETE_LIST_EVENT: {
            return {
                ...state,
                activeIndex: (state.activeIndex - 1) % state.all.length
            }
        }
        default: return state
    }
}

export default list;