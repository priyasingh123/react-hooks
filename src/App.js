import logo from './logo.svg';
import './App.css';
import React from 'react'
import ClickCounter from './components/highOrderComp/ClickCounter';
import HoverCounter from './components/highOrderComp/HoverCounter';
import UseReducerCounter from './components/hooks/UseReducerCounter';
import KeyUsage from './components/stateResetting/KeyUsage'

function App() {
  return (
    <div className='App'>
      {/* 1. for HOC */}
      {/* 1. if we pass any prop to ClickCounter or HoverCounter, it goes to HOC and not to these components */}
      {/* 1. <ClickCounter name="Priya"/>
      1. <HoverCounter/> */}
      <KeyUsage/>
    </div>

  )
}

export default App;
