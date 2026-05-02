import { Routes, Route } from 'react-router-dom'

import { Calculadora } from './pages/Calculadora'

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Calculadora />} />
    </Routes>
  )
}