import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import joi from "joi"
import dotenv from 'dotenv';

import AppContext from '../contexts/AppContext';
import Button from "./Button.js"
import Input from "./Input.js"

dotenv.config();

export default function Login() {
  const [name, setName] = useState("")
  const [password, setpassword] = useState("")
  const [botaoClickado, setBotaoClickado] = useState(false)
  const { setToken } = useContext(AppContext)
  let navigate = useNavigate()

  function login(event) {
    event.preventDefault()

    setBotaoClickado(true)

    const signUpSchema = joi.object({
      name: joi.string().required(),
      password: joi.string().required()
    })

    const user = { name, password }

    const validation = signUpSchema.validate(user, { abortEarly: true })
    if (validation.error) {
      const message = validation.error.details.message
      alert(message)
      setBotaoClickado(false)
      return
    }

    const cadastro = axios.post(`https://vapor-store-back.herokuapp.com/login`,
      {
        name,
        password,
      })

    cadastro.then((r) => {
      setToken(r.data.token)
      setBotaoClickado(false)
      navigate("/games")
    })

    cadastro.catch(error => {
      alert(error.response.data)
      setBotaoClickado(false)
    })
  }

  return (
    <Main>

      <h1>Vapor Store</h1>

      <form onSubmit={login}>
        <div className="loginBox">
          <span>Nome de usuário Vapor</span>
          <Input type="text" placeholder="" state={name} setState={setName} disabled={botaoClickado} />
        </div>

        <div className="loginBox">
          <span>Senha</span>
          <Input type="password" placeholder="" state={password} setState={setpassword} disabled={botaoClickado} />
        </div>

        <Button type='submit' disabled={botaoClickado}>Entrar</Button>

      </form>

      <StyledLink to={"/sign-up"}>Cadastre-se na Vapor Store<br /> e descubra milhares de jogos!</StyledLink>

    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 68px;

  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    line-height: 50px;

    color: #FFFFFF;

    margin: 40px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 25px;
    margin-bottom: 100px;
  }

  form .loginBox {
    display: flex;
    flex-direction: column;
    gap: 6px;

    font-size: 20px;
  }
`

const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
`