import axios from 'axios'

const BASE_URL='http://localhost:5000'

async function postCheckout (obj, token){
    const promise = await axios.post(BASE_URL+'/checkout', obj, {headers: {Authorization: `Bearer ${token}`}})
    return promise
}

const api = {
    postCheckout
}

export default api