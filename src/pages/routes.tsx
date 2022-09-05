import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./Calculadora";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculadora />} />
      </Routes>
    </BrowserRouter>
  )
}
