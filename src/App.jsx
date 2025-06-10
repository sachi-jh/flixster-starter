import { useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import data from './data/data.js'

const App = () => {
  console.log(data.results)
  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <MovieList data={data}/>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
