import { useContext, useState } from "react"
import AppContext from "../../contexts/AppContext"
import api from '../../services/api'

export default function Checkout () {
    const productId = "6204533642a9583cd09518a2" //temporary


    const [form, setForm] = useState({
        name:'',
        cpf:'',
        email:'',
        cardNumber:''
    })

    //const {token} = useContext(AppContext)
    const token = '76a41e31-b51c-4269-8a64-3d6fc3952b83' //temporary

    function handleInput(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const promise = api.postCheckout({productId, infos: {...form}}, token)
        promise.then( () => {
            alert('show')
            // navigate products?
        })
        promise.catch(error => {
            console.log(error.response.data);
            alert(error.response.data)
        })
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text"
                    name='name'
                    placeholder="Digite seu nome"
                    required
                    onChange={e => handleInput(e)}
                    value={form.name}
                />
                <input type="number"
                    name='cpf'
                    placeholder="Digite seu cpf"
                    required
                    onChange={e => handleInput(e)}
                    value={form.cpf}
                />
                <input type="email"
                    name='email'
                    placeholder="Digite seu email"
                    required
                    onChange={e => handleInput(e)}
                    value={form.email}
                />
                <input type="number"
                    name='cardNumber'
                    placeholder="Digite o número do cartão"
                    required
                    onChange={e => handleInput(e)}
                    value={form.cardNumber}
                />
                <button>Confirmar</button>
            </form>
        </>
    )
}