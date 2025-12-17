import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Log121725 from './components/devDiary/log121725.jsx'

export function MyButton() {
  return (
    <button> I'm another button </button>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyButton />
      <Log121725 />
    </>
  )
}
