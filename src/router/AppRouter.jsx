import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "../pages/AboutPage"
import { GamePage } from "../pages/GamePage/GamePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<GamePage />}/>
      <Route path="about" element={ <AboutPage /> }/>
      <Route path="*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
