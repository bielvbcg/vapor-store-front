import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppContext from "../contexts/AppContext";
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import Games from "./Games";
import GamePage from "./GamePage"
import Checkout from "./Checkout/index.js"
import Cart from "./Cart/index.js";

export default function App() {
  const [token, setToken] = useState(null)
  const [cart, setCart] = useState([])
  const context = { token, setToken, cart, setCart }

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/games/:gameName" element={<GamePage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}