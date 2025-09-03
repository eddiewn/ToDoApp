import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex justify-center items-center bg-gray-100 min-h-screen text-gray-800">        
        <h1 className=''>Hello World!</h1>
    </div>
    </>
  )
}

export default App
