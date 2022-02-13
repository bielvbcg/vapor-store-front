import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import dotenv from 'dotenv';

import AppContext from '../contexts/AppContext';
import GameBox from './GameBox';
import Footer from './Footer.js'
import Header from './Header.js'

dotenv.config();

export default function Games() {
  const [games, setGames] = useState(null)
  const { token } = useContext(AppContext)

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}
      ` }
    }

    const gamesPromisse = axios.get(`http://localhost:5000/games`, config)

    gamesPromisse.then((response) => { setGames(response.data) })
    gamesPromisse.catch(error => console.log(error.message))
  }, [])

  return (
    <>
      <Header></Header>

      <GamesContainer>

        {games && games.map(({ name, img, price }, i) => (
          <GameBox key={i} name={name} img={img} price={price} />
        ))}

      </GamesContainer>

      <Footer></Footer>
    </>
  )
}

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2 , minmax(150px , 1fr));
  grid-row-gap: 20px;

  padding: 20px;
  margin: 75px 0;
`