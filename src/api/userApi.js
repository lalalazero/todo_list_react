import request from './request'

const userApi = {
    isAuthed: ()=>{
        return request('valid')
    }
}
export default userApi;