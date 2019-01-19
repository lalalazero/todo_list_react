
import { combineReducers } from 'redux'

import {
    SET_LIST_VISIBILITY,
    SET_DETAIL_VISIBILITY
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

const isDetailVisible = (state = false,action)=>{
    switch(action.type){
        case SET_DETAIL_VISIBILITY: return action.payload
        default: return state
    }
}
const control = combineReducers({
    listVisible,
    isDetailVisible
})

export default control
