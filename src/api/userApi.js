import request from './request'

const userApi = {
    isAuthed: ()=>{
        return request('autoLogin') 
    },
    logIn:(username,password)=>{
        return request(`login`,{
            method: 'POST',
            body:{
                username,
                password
            }
        })
    },
    signUp:(username,password)=>{
        return request(`register`,{
            method: 'POST',
            body:{
                username,
                password
            }
        })
    },
    getUserInfo: () => {
        return request(`userInfo`,{
            method: 'POST',
            body: {
                userid: localStorage.getItem('userId')
            }
        })
    }
}
export default userApi;