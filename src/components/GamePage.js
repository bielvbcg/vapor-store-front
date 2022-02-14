import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';

import AppContext from '../contexts/AppContext';
import Button from "./Button.js"
import Footer from './Footer.js'
import Header from './Header.js'

export default function GamePage() {
  const [gameData, setGameData] = useState(null)
  const { gameName } = useParams()
  const { token, cart, setCart } = useContext(AppContext)
  let navigate = useNavigate()

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}
       ` }
    }

    const gamePromisse = axios.get(`https://vapor-store-back.herokuapp.com/games/${gameName}`, config)

    gamePromisse.then((response) => {
      const nameHolder = response.data.name.split("-").map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(" ")
      setGameData({ ...response.data, name: nameHolder })
    })

    gamePromisse.catch(error => console.log(error.message))
  }, [])

  function addToCart() {
    setCart([...cart, {name: gameData.name, img: gameData.img, price: gameData.price}])
    navigate('/games')
  }

  return (
    <>
      <Header></Header>

      {gameData &&
        <Main>
          <div className="image">
            <img src={gameData.img} alt={gameData.name} />
          </div>

          <div className="container">
            <span className="game-title">{gameData.name}</span>
            <span className="price">R$ {gameData.price.replace(".", ",")}</span>
          </div>

          <div className="description">{gameData.description}</div>

          <Button click={addToCart}>Adicionar ao carrinho</Button>

        </Main>
      }

      <Footer></Footer>
    </>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 78px 0;
  padding: 0 7.5px;
  gap: 8px;

  .image img {
    align-self: center;
    width: 360px;
    box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);
  }

  .container {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 4px;
    padding: 7px 5px;
    border-radius: 3px;

    background: linear-gradient( 350deg , #1B397E 10% , #0e141c 80% );
    box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);
  }

  span.price {
    color: #2B87D9;
  }

  .description {
    padding: 7px 5px;
    border-radius: 3px;

    background: linear-gradient( 25deg , #1B397E 10% , #0e141c 80% );
    box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);
  }

  button {
    align-self: center;
    justify-self: flex-end;

    margin-top: 20px;
  }
`