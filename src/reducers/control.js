
import { combineReducers } from 'redux'

import {
    SET_LIST_VISIBILITY,
    SET_DETAIL_VISIBILITY,
    RAISE_MSG
} from './../constants'

const listVisible = (state = true,action)=>{
    switch(action.type){
        case SET_LIST_VISIBILITY: {
            console.log('here..action.payload', action.payload)
            return action.payload
        }
        default: return state
    }
}

const detailVisible = (state = false,action)=>{
    switch(action.type){
        case SET_DETAIL_VISIBILITY: return action.payload
        default: return state
    }
}
const msg = (state = '', action)=>{
    switch(action.type){
        case RAISE_MSG: return action.msg
        default: return state
    }
}
const control = combineReducers({
    listVisible,
    detailVisible,
    msg
})

export default control
