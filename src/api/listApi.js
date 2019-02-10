import request from './request'


const listApi = {
    queryAll: () => {
        let userId = localStorage.getItem('userId')
        return request(`lists?userid=${userId}`);
    },
    create: (name) => {
        let userId = localStorage.getItem('userId')
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