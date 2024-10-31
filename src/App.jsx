import "./App.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <>


      <BrowserRouter>

        <Header />


        <main>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>




      </BrowserRouter>

    </>
  )
}

export default App
