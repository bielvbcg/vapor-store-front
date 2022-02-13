import styled from 'styled-components';

export default function Button({ children, click }) {
  return (
    <ButtonHolder onClick={click && click}>{children}</ButtonHolder>
  )
}

const ButtonHolder = styled.button`
  width: 303px;
  height: 45px;

  background: radial-gradient( #1A9FFF 0%, #00BBFF 80%);
  border-radius: 4.63636px;
  border: none;

  color: #E9E9E9;
  font-size: 20.976px;
  line-height: 26px;
`
