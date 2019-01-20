import {
    LOAD_LISTS,
    SET_CURRENT_LIST,
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
        default: return state
    }
}

export default list;