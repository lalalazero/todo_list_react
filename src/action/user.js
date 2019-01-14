import userApi from "../api/userApi";
import { 
    TOKEN_VALID_SUCCESS,
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR,
    USER_LOGGIN_REQUEST,
    USER_LOGGIN_SUCESS,
    USER_LOGGIN_FAIL
} from './../constants'

export const autoLogin = async (dispatch)=>{
    console.log('enter autoLogin..')
    dispatch({
        type: CHECK_USER_TOKEN
    })
    const res = await userApi.isAuthed()
    if(res && res.status === 0){
        await dispatch({
            type: TOKEN_VALID_SUCCESS
        })
    }else{
        await dispatch({
            type: TOKEN_VALID_ERROR
        })
    }

}

export const logIn = (username, password) => (dispatch) => {
    console.log('enter logIn..')
    dispatch({
        type: USER_LOGGIN_REQUEST
    })
    userApi.logIn(username, password).then(res => {
        if(res && res.status === 0){
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userId',res.data.userId)
            dispatch({
                type: USER_LOGGIN_SUCESS,
                user: res.data.user || {} // TODO 后台完善返回 user 信息
            })
        }else{
            dispatch({
                type: USER_LOGGIN_FAIL
            })
        }
    })
}

