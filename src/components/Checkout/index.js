import { useContext, useState } from "react"
import { useLocation } from "react-router-dom";
import AppContext from "../../contexts/AppContext"
import api from '../../services/api'
import Container from "./style";

export default function Checkout () {
    const location = useLocation()
    const products = location.state.map(v => v.name)

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
        const promise = api.postCheckout({products, infos: {...form}}, token)
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
        <Container>
            <div className="topContainer">
                <h1>Produtos</h1>
                <div className="products">
                    {products.map((v, i) => <p key={i}>{i+1} - {v}</p>)}
                    {products.length === 0 && 'Adicione o que deseja no carrinho para finalizar a compra'}
                </div>
            </div>
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
                <button disabled={products.length === 0 ? true : false}>Confirmar</button>
            </form>
        </Container>
    )
}