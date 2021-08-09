import React from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { AppLeft } from './screens/app-left/app-left';

const App = () => {
  return(
    <div className="App">
      <Header />  
      <AppLeft />
      

    </div>

  )
}
export default App;