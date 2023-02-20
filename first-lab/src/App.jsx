import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <section id="titleCtn">
        <div id="navBar">
            <img src="../src/assets/ironhack-logo-xs.png" />
            <img src="../src/assets/burger-menu.png" />
        </div>
        <div id="titleSpacingCtn">
          <div id="welcomeText">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button type="submit">Awesome!</button>
          </div>
          <div>
          </div>
        </div>
      </section>
      <section id="bulletPoints">
        <div>
          <img src="../src/assets/screwdriver.png" /> 
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src="../src/assets/pen.png" /> 
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src="../src/assets/gear.png" /> 
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src="../src/assets/code.png" /> 
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  )
}

export default App
