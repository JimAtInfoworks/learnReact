import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Log121725 from './components/dev-diary/Log_12_17_25.jsx'
import HomePage from './components/HomePage.jsx'
import { Router }  from "./router.jsx";
import { React } from 'react';

export function MyButton() {
  return (
    <button> I'm another button </button>
  )
}

export default function App() {

  return (
    <>
      <MyButton />
      {/* <Log121725 /> */}
      {/* <Router /> */}
    </>
  )
}
