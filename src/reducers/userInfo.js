import { 
    TOKEN_VALID_SUCCESS, 
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR,
    USER_LOGGIN_REQUEST,
    USER_LOGGIN_SUCESS,
    USER_LOGGIN_FAIL,
    USER_LOGOUT,
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAIL,
    SET_CURRENT_USER,
 } from './../constants'

const userInfo = (state={
    isAuthed: false,
    name: 'testUser',
    isLogging: false,
    isLogged: false,
    currentUser: {},
    isSignUp: false
},action)=>{
    console.log('receive action = ',action.type)
    switch(action.type){
        case TOKEN_VALID_SUCCESS:{
            return{
                ...state,
                isAuthed: true,
                isLogging: false,
                isLogged: true
            }
        }
        case CHECK_USER_TOKEN:{
            return{
                ...state,
                isLogging: true,
                isAuthed: false
            }
        }
        case TOKEN_VALID_ERROR:{
            return{
                ...state,
                isLogging: false,
                isAuthed: false
            }
        }
        case USER_LOGGIN_REQUEST:{
            return{
                ...state,
                isLogging: true
            }
        }
        case USER_LOGGIN_FAIL:{
            return{
                ...state,
                isLogging: false,
                isLogged: false
            }
        }
        case USER_LOGGIN_SUCESS:{
            return {
                ...state,
                isLogging: false,
                isAuthed: true,
                isLogged: true,
                currentUser: action.user
            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                isLogged: false,
                isAuthed: false,
                currentUser: {}
            }
        }
        case USER_SIGN_UP_REQUEST:{
            return{
                ...state,
                isSignUp: true
            }
        }
        case USER_SIGN_UP_SUCCESS:{
            return{
                ...state,
                isSignUp: false,
                isLogged: true,
                isAuthed: true,
                currentUser: action.user
            }
        }
        case USER_SIGN_UP_FAIL: {
            return {
                ...state,
                isSignUp: false,
                isLogged: false,
                isAuthed: false,
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        default: return state
    }
}


export default userInfo;