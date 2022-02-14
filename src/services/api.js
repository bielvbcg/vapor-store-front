import axios from 'axios'

const BASE_URL ='https://vapor-store-back.herokuapp.com/'

async function postCheckout (obj, token){
    const promise = await axios.post(BASE_URL+'/checkout', obj, {headers: {Authorization: `Bearer ${token}`}})
    return promise
}

const api = {
    postCheckout
}

export default api