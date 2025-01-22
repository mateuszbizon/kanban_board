import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
        <ToastContainer position="top-left" autoClose={3000} closeOnClick />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
