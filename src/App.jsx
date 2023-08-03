
import react , { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {

 
  useEffect( () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => console.log(res))
    .catch(err => console.log(err));
  } , [] );

  return (
    <h1> axios tutorial </h1> 
  );
}

export default App; 
