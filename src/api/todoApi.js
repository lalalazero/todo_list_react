import request from "./request";

const todoApi = {
    getTodos: (listId) => {
        return request(`lists/items?id=${listId}&type=0`)
    },
    getComplete: (listId) => {
        return request(`lists/items?id=${listId}&type=1`)
    },
    markAsChecked: (itemId) => {
        return request(`lists/items/status?id=${itemId}&status=1`,{
            method: 'PUT'
        })
    },
    markAsUnchecked: (itemId) => {
        return request(`lists/items/status?id=${itemId}&status=0`,{
            method: 'PUT'
        })
    },
    add: (listId, title, due) => {
        return request(`lists/items`,{
            method: 'POST',
            body: {
                id: listId,
                value: title,
                due,
            }
        })
    },
    remove: (itemId) => {
        return request(`lists/items?id=${itemId}`,{
            method: 'DELETE'
        })
    }
}

export default todoApi;