import userApi from "../api/userApi";
import { 
    TOKEN_VALID_SUCCESS,
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR 
} from './../constants/EventTypes'

async function autoLogin(dispatch){
    // console.log('enter autoLogin...')
    dispatch({
        type: CHECK_USER_TOKEN
    })
    // console.log('dispatch token valid success..')
    const res = await userApi.isAuthed()
    // console.log('request valid..')
    if(res.status === 0){
        await dispatch({
            type: TOKEN_VALID_SUCCESS
        })
    }else{
        await dispatch({
            type: TOKEN_VALID_ERROR
        })
    }
}

export { autoLogin }