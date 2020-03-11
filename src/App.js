import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route, Router} from 'react-router-dom'
import About from './Components/About';
import BMI from './Components/BMI';
import Exercise from './Components/Exercise';
import Calorie from './Components/Calorie';
import Find_gym from './Components/Find_gym';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
  <div>
    <Navbar/>
    <Route exact path='/'component={Home}/>
    <Route path='/About'component={About}/>
    <Route path='/BMI'component={BMI}/>
    <Route path='/Exercise'component={Exercise}/>
    <Route path='/Calorie'component={Calorie}/>
    <Route path='/Find_gym'component={Find_gym}/>
  </div>
  </BrowserRouter>
  );
}

export default App;
