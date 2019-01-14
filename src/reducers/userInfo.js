import { 
    TOKEN_VALID_SUCCESS, 
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR
 } from './../constants'

const userInfo = (state={
    isAuthed: false,
    name: 'testUser',
    isLogging: false,
},action)=>{
    switch(action.type){
        case TOKEN_VALID_SUCCESS:{
            console.log('receive TOKEN_VALID_SUCCESS event..')
            return{
                ...state,
                isAuthed: true,
                isLogging: false
            }
        }
        case CHECK_USER_TOKEN:{
            console.log('receive CHECK_USER_TOKEN event..')
            return{
                ...state,
                isLogging: true,
                isAuthed: false
            }
        }
        case TOKEN_VALID_ERROR:{
            console.log('receive CHECK_USER_TOKEN event..')
            return{
                ...state,
                isLogging: false,
                isAuthed: false
            }
        }
        default: return state
    }
}


export default userInfo;