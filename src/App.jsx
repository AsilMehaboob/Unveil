import './App.css'
import ConfessionCard from './component/ConfessionCard'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './pages/About';
import AddConfession from './pages/AddConfession';
import Feed from './pages/feed'
import {BrowserRouter, Route, Routes} from "react-router-dom";



  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };




function App() {


  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
         <Route path="/" Component={Feed} />
         <Route path="/add" Component={AddConfession} />
         <Route path="/about" Component={About}/>
         </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )

  
}

export default App;
