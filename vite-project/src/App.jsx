import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar/Searchbar'

function App() {
 const [input, setInput] =useState("")
  return(
   <div>
    <Searchbar setInput={setInput}/>
   </div>
  )
}
export default App
