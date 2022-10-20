import React, { useEffect, useState } from 'react';
import "./App.css";
import Card from './components/Card';
import Navbar from "./components/Navbar";
import getMatches from './api/Api';


function App() {


  const [matches,setMatches] = useState([])

  useEffect(()=>{
    getMatches()
    .then((data)=>setMatches(data.data))
    .catch()
  })

  return (
    <>
      <Navbar appname="Cricket Score"/>
      {
         matches.map((matches)=>(
          <Card key={matches.id} match={matches}/>
      ))}
  </>
  );
}

export default App;
