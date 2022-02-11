import styled from 'styled-components';

export default function GameBox({ name, img, price }) {

  return (
    <Main>
      <Image>
        <img src={img} alt={name} />
      </Image>
      <span className="title">{name}</span>
      <span className="price">R$ {price.replace(".", ",")}</span>
    </Main>
  )
}


const Main = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%); 
  box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    padding-left: 3px;
  }

  span.price {
    color: #2B87D9;
  }
`
const Image = styled.div`
  img {
    width: 150px;
    height: 115px;
  }
`