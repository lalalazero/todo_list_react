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
        default: return state
    }
}

export default todos;