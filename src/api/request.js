const prefix = 'http://localhost:8001/api/'

function checkstauts(response){
    if(response.status >= 200 && response.status < 300){
        return response
    }
    const errortext = response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
}

function request(url, options) {
    let newUrl = `${prefix}${url}`
    const defaultOptions = {
        method: 'GET',
        credentials: 'include',
        headers: {
            token: localStorage.getItem('token') || ''
        }
    }
    const newOptions = {...defaultOptions, ...options};
    if(
        newOptions.method === 'GET' || 
        newOptions.method === 'POST' ||
        newOptions.method === 'DELETE' || 
        newOptions.method === "PUT"
    ){
        if(newOptions.body instanceof FormData) {
            // newOptions is formData
            newOptions.headers = {
                ...newOptions.headers,
                'Accept': 'application/json'
            }
        }else{
            newOptions.headers = {
                ...newOptions.headers,
                'Content-type': 'application/json; charset=utf-8'
            }
            newOptions.body = JSON.stringify(newOptions.body)
        }
    }

    return fetch(newUrl, newOptions)
    .then(checkstauts)
    .then(response => {
        if(response.headers.get('Content-type').indexOf('application/json') !== -1){
            return response.json();
        }
    }).catch(e => {
        console.log('request catch error => ', JSON.stringify(e));
    })
}

export default request;