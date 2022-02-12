import { useState } from "react"
import { useNavigate } from "react-router-dom"

const arr = [
    { name: 'numero 1', img: 'https://unsplash.it/144/87', price: '2.00' },
    { name: 'numero 2', img: 'https://unsplash.it/144/87', price: '4.00' },
    { name: 'numero 3', img: 'https://unsplash.it/144/87', price: '6.00' },
    { name: 'numero 4', img: 'https://unsplash.it/144/87', price: '8.00' },
    { name: 'numero 5', img: 'https://unsplash.it/144/87', price: '10.00' }
]

export default function Cart () {
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
                <div>
                    <p>{name}</p>
                    <span>{price}</span>
                </div>
                <button onClick={() => {
                    handleClick(props.position)
                }}>X</button>
            </div>
        )
    }

    return(
        <>
            {array.map((v, i) => <Line infos={v} key={i} position={i}/>
            )}
            {array.length === 0 && 'Você não possui nada no carrinho'}
            
            <div>
                <p>R$ {total.toFixed(2)}</p>
                <button onClick={() => {
                    navigate("/checkout",{state: array})
                }}>Confirmar</button>
            </div>
        </>
    )
}