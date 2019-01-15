
import { combineReducers } from 'redux'

import {
    SET_LIST_VISIBILITY,
    SET_DETAIL_VISIBILITY
} from './../constants'

const isListFolded = (state = false,action)=>{
    switch(action.type){
        case SET_LIST_VISIBILITY: return action.payload
        default: return state
    }
}

const isDetailVisible = (state = false,action)=>{
    switch(action.type){
        case SET_DETAIL_VISIBILITY: return action.payload
        default: return state
    }
}
const control = combineReducers({
    isListFolded,
    isDetailVisible
})

export default control
