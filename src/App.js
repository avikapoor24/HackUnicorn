import "./App.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Router from "./routes/routes";

function App() {
  return (
    <>
    <div className="App bg-black"> 
    
      <Navbar />
      
      <Router />
     </div>    
      <Footer />
        
     
   </> 
  );
}

export default App;