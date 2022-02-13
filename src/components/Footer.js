import { useNavigate } from "react-router-dom"
import styled from 'styled-components';

export default function Footer() {
  let navigate = useNavigate()

  return (
    <FooterBox>
      <ion-icon name="game-controller-outline" onClick={() => navigate('/games')}></ion-icon>
      <span>|</span>
      <ion-icon name="cart-outline" onClick={() => navigate('/cart')}></ion-icon>
    </FooterBox>
  )
}

const FooterBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;

  height: 70px;

  font-size: 30px;

  box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);
  background: linear-gradient(45deg , #171A21 15% , #2A475E 90%)
`