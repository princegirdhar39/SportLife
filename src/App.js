import React from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { AppLeft } from './screens/app-left/app-left';
import AppCenter from './screens/app-left/app-center/app-center';

const App = () => {
  return(
    <div className="App">
      {/* <Header />   */}
      <AppLeft />
      <AppCenter />
      

    </div>

  )
}
export default App;