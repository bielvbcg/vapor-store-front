import styled from 'styled-components';

export default function Input({ type, placeholder, state, setState, disabled }) {
  return (
    <InputHolder type={type} placeholder={placeholder} value={state} onChange={e => setState(e.target.value)} disabled={disabled} ></InputHolder>
  )
}

const InputHolder = styled.input`
    width: 303px;
    height: 45px;

    padding: 8px 6px;
    border-radius: 3px;

    font-size: 17px;
    line-height: 23px;
    color: #FFFFFF;

    background: #32353C;
    border: 1px solid #26282D;
`