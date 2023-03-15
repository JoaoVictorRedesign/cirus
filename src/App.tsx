import { useState } from 'react'
import './App.css'
import Login from './Components/LoginScreens/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

export default App
