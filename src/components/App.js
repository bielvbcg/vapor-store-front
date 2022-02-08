import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.js"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}