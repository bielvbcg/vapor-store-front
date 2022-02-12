import { useNavigate, useLocation } from "react-router-dom"
import { useContext } from "react"
import styled from 'styled-components';

import AppContext from '../contexts/AppContext';

export default function Header() {
  let navigate = useNavigate()
  let location = useLocation()
  const { setToken } = useContext(AppContext)

  function logout() {
    if (window.confirm("Deseja deslogar?")) {
      setToken(null)
      navigate('/')
    }
  }

  return (
    <HeaderBox>
      <ion-icon name="chevron-back-outline" onClick={() => { location.pathname !== "/games" && navigate(-1) }}></ion-icon>
      <span>Vapor Store</span>
      <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  height: 70px;
  padding: 0 10px;

  font-size: 30px;

  box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);
  background: linear-gradient(225deg , #171A21 15% , #2A475E 90%)
`