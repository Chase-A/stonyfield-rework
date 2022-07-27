import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(7)

  return (
    <div className="App">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Card />
    </div>
  )
}

export default App
