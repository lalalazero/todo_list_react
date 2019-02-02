import * as Event from '../constants/index'
const todos = (state={
    active: [

    ],
    complete:[
        
    ]
},action)=>{
    switch(action.type){
        case Event.LOAD_TODOS:{
            return {
                ...state,
                active: action.payload
            }
        }
        case Event.LOAD_COMPLETE:{
            return {
                ...state,
                complete: action.payload
            }
        }
        default: return state
    }
}

export default todos;