import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Container from "./style"

import Footer from '../Footer.js'
import Header from '../Header.js'
import AppContext from "../../contexts/AppContext"

export default function Cart() {
    const {cart, setCart} = useContext(AppContext)

    const navigate = useNavigate()

    let total = 0
    cart.forEach(v => {
        total += parseFloat(v.price)
    })

    function handleClick(position) {
        cart.splice(position, 1)
        setCart([...cart])
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
            <Header/>
            <h1>Carrinho</h1>
            <div className="lines">
                {cart.map((v, i) => <Line infos={v} key={i} position={i}/>
                )}
                {cart.length === 0 && 'Você não possui nada no carrinho'}
            </div>
            
            <div className="footer">
                <p>TOTAL: R$ {total.toFixed(2).toString().replace('.', ',')}</p>

                <button onClick={() => {
                    navigate("/checkout", { state: cart })
                }}>Confirmar</button>
            </div>
            <Footer/>
        </Container>

    )
}