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
        
      <Footer />
        
      </div>
    </>
  );
}

export default App;