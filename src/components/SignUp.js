import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import joi from "joi"

import Button from "./Button.js"
import Input from "./Input.js"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [botaoClickado, setBotaoClickado] = useState(false)
  let navigate = useNavigate()

  async function signUp(event) {
    event.preventDefault()

    setBotaoClickado(true)

    const signUpSchema = joi.object({
      name: joi.string().required(),
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().required()
    })

    const user = {
      name,
      email,
      password,
    }

    const validation = signUpSchema.validate(user, { abortEarly: true })
    if (validation.error) {
      const message = validation.error.details.message
      alert(message)
      setBotaoClickado(false)
      return
    }

    if (password !== confirmPassword) {
      alert("As senhas não batem")
      setBotaoClickado(false)
      return
    }

    const cadastro = axios.post("http://localhost:5000/sign-up", user)

    cadastro.then((r) => {
      navigate("/")
      setBotaoClickado(false)
      cleanData()
    })

    cadastro.catch(error => {
      alert(error.response.data.message)
      setBotaoClickado(false)
    })
  }

  function cleanData() {
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <Main>

      <h1>Vapor Store</h1>

      <form onSubmit={signUp}>

        <div className="loginBox">
          <span>Nome de usuário</span>
          <Input type="text" placeholder="" state={name} setState={setName} disabled={botaoClickado} />
        </div>

        <div className="loginBox">
          <span>E-mail</span>
          <Input type="email" placeholder="" state={email} setState={setEmail} disabled={botaoClickado} />
        </div>

        <div className="loginBox">
          <span>Senha</span>
          <Input type="password" placeholder="" state={password} setState={setPassword} disabled={botaoClickado} />
        </div>

        <div className="loginBox">
          <span>Confime sua senha</span>
          <Input type="password" placeholder="" state={confirmPassword} setState={setConfirmPassword} disabled={botaoClickado} />
        </div>

        <Button type='submit' disabled={botaoClickado}>Cadastrar</Button>

      </form>

      <StyledLink to={"/"}>Já tem uma conta? Entre agora!</StyledLink>

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

    color: #F1F1F1;

    margin: 40px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 20px;
    margin-bottom: 25px;
  }

  form .loginBox {
    display: flex;
    flex-direction: column;
    gap: 6px;

    font-size: 20px;
  }
`

const StyledLink = styled(Link)`
    color: #E9E9E9;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
`