import userApi from "../api/userApi";
import { 
    // autoLogin 
    TOKEN_VALID_SUCCESS,
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR,

    // userLogin & Logout
    USER_LOGGIN_REQUEST, 
    USER_LOGGIN_SUCESS,
    USER_LOGGIN_FAIL,

    // userSignup
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAIL,
    RAISE_MSG,
    USER_LOGOUT,
    SET_CURRENT_USER,
    SET_CURRENT_LIST
} from './../constants'
import { getAll } from "./list";

export const autoLogin = () => async (dispatch)=>{
    console.log('enter autoLogin..')
    dispatch({
        type: CHECK_USER_TOKEN
    })
    const res = await userApi.isAuthed()
    if(res && res.status === 0){
        dispatch({
            type: TOKEN_VALID_SUCCESS
        })
        const res2 = await userApi.getUserInfo()
        if(res2 && res2.status === 0){
            dispatch({
                type: SET_CURRENT_USER,
                payload: res2.data
            })

            dispatch({
                type: SET_CURRENT_LIST,
                index: 0
            })

            dispatch(getAll(res2.data.id))
        }
        
    }else{
        dispatch({
            type: TOKEN_VALID_ERROR
        })
    }

}

export const logIn = (username, password) => (dispatch,getState) => {
    const { userInfo } = getState()
    if(userInfo.isLogging){
        console.log('等待前一个 logIn 返回结果...')
        return;
    }
    console.log('enter logIn..')
    dispatch({
        type: USER_LOGGIN_REQUEST
    })
    userApi.logIn(username, password).then(res => {
        if(res && res.status === 0){
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userId',res.data.user.id)
            dispatch({
                type: USER_LOGGIN_SUCESS,
                user: res.data.user || {} 
            })
            dispatch({
                type: SET_CURRENT_LIST,
                index: 0
            })
            dispatch(getAll(res.data.user.id))
        }else{
            dispatch({
                type: USER_LOGGIN_FAIL 
            })

            dispatch({
                type: RAISE_MSG,
                msg: res.msg
            })
        }
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch({
        type: USER_LOGOUT
    })
}

export const signUp = (username, password) => (dispatch, getState) => {
    const { userInfo } = getState()
    if(userInfo.isSignUp){
        console.log('等待前一个 signup 返回...')
        return
    }

    dispatch({
        type: USER_SIGN_UP_REQUEST
    })
    userApi.signUp(username, password).then(res =>{
        if(res && res.status === 0){
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userId',res.data.user.id)
            
            dispatch({
                type: USER_SIGN_UP_SUCCESS,
                user: res.data.user, // todo 后台接口返回用户信息
            })
            dispatch({
                type: SET_CURRENT_LIST,
                index: 0
            })

            dispatch(getAll())
        }else{
            dispatch({
                type: USER_SIGN_UP_FAIL,
                //error: res.data.msg // todo
            })

            dispatch({
                type: RAISE_MSG,
                msg: res.msg
            })
        }
    })
}

