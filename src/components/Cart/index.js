import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "./style"

import Footer from '../Footer.js'
import Header from '../Header.js'

const arr = [
    { name: 'numero 1', img: 'https://unsplash.it/144/87', price: '2.00' },
    { name: 'numero 2', img: 'https://unsplash.it/144/87', price: '4.00' },
    { name: 'numero 3', img: 'https://unsplash.it/144/87', price: '6.00' },
    { name: 'numero 4', img: 'https://unsplash.it/144/87', price: '8.00' },
    { name: 'numero 4sdfaskjfbasdkjfs hba sdkjbhfsdjbf hgdsdhabdf', img: 'https://unsplash.it/144/87', price: '8.00' },
    { name: 'numero 4', img: 'https://unsplash.it/144/87', price: '8.00' },
    { name: 'numero 5', img: 'https://unsplash.it/144/87', price: '10.00' }
]

export default function Cart() {
    const [array, setArray] = useState([...arr])

    const navigate = useNavigate()

    let total = 0
    array.forEach(v => {
        total += parseFloat(v.price)
    })

    function handleClick(position) {
        array.splice(position, 1)
        setArray([...array])
    }

    function Line(props) {
        const { name, img, price } = props.infos
        return (
            <div className={`line`}>
                <img src={img} alt={name} />
                <div className="texts">
                    <p>{name}</p>
                    <span>R$ {price.replace('.',',')}</span>
                </div>
                <button onClick={() => {
                    handleClick(props.position)
                }}>X</button>
            </div>
        )
    }

    return(
        <Container>
            <h1>Carrinho</h1>
            <div className="lines">
                {array.map((v, i) => <Line infos={v} key={i} position={i}/>
                )}
                {array.length === 0 && 'Você não possui nada no carrinho'}
            </div>
            
            <div className="footer">
                <p>TOTAL: R$ {total.toFixed(2).toString().replace('.', ',')}</p>

                <button onClick={() => {
                    navigate("/checkout", { state: array })
                }}>Confirmar</button>
            </div>
        </Container>

    )
}