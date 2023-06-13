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
      <Footer className='relative top-20' />
        
      </div>
    </>
  );
}

export default App;