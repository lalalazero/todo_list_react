import {
    LOAD_LISTS,
} from './../constants'


const list = (state = {
    all: []
}, action) => {
    switch(action.type){
        case LOAD_LISTS: {
            return {
                ...state,
                all: action.lists
            }
        }
        default: return state
    }
}

export default list;