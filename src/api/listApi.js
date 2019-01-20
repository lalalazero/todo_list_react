import request from './request'
const userId = localStorage.getItem('userId')

const listApi = {
    queryAll: () => {
        return request(`lists?userid=${userId}`);
    },
    create: (name) => {
        return request(`lists?userid=${userId}&name=${name}`,{
            method: 'POST'
        })
    },
    update: (id, name) => {
        return request(`lists?id=${id}&name=${name}`,{
            method: 'PUT'
        })
    },
    delete: (id) => {
        return request(`lists?id=${id}`,{
            method: 'DELETE'
        })
    }
}

export default listApi;