import request from './request'

const userApi = {
    isAuthed: ()=>{
        return request('valid')
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
}
export default userApi;