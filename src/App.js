import './App.css';
import { useState, useEffect } from 'react'
import Generation from './components/Generation';
import { createGeneration, values, weights, nextGeneration } from './genetic/geneticAlgo';
//import axios from 'axios';
function App() {
  const [generation, nextGen] = useState([
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 1]

  ]);
  const [valuesArray, changeValues] = useState(values);
  const [weightsArray, changeWeights] = useState(weights);
  const getGen = () => {
    /*axios.get('http://localhost:5000/generation')
      .then((response) => {
        const g = response.data;
        nextGen(g);
        console.log(g);
        console.log("Hola")
      }).catch((e) => {
        console.log(e);
      });*/
  }

  useEffect(() => {
    nextGen(createGeneration(8));

  }, [])
  return (
    <div className="App">
      <h1>Hola Main</h1>
      <Generation generation={generation} />
      <button className='btn-gen' onClick={() => nextGen(nextGeneration())}>
        Next Generation
      </button>
    </div>
  );
}

export default App;
