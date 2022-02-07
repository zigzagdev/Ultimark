import './App.css';
import  Footer from  './layouts/footer.tsx'
import  Header from './layouts/header'
import  DarkMode from  './layouts/DarkMode.tsx'
import  Main from './layouts/main'



function App() {
  return (
    <body>
      <div className="Wrapper">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
