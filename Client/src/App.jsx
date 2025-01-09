import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-3xl flex justify-center items-center bg-black'>
      <h1 className='m-6 bg-red-700'>Jatin</h1>
    </div>
  )
}

export default App
