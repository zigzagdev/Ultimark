import './App.css';
import  Footer from  './layouts/Footer.tsx'
import  Header from './layouts/Header'
import  DarkMode from  './layouts/DarkMode.tsx'
import  Main from './layouts/Main'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="Wrapper">
        <Header/>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;
