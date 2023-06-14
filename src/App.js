import "./App.css";
import NavbarA from './components/NavbarA';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Router from "./routes/routes";

function App() {
  return (
    <>
    <NavbarA />
    <div className="App bg-black"> 
    
      
      

       <Router />
     </div>    
      <Footer />
        
     
   </> 
  );
}

export default App;