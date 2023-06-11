import "./App.css";
import Navbar from './components/Navbar';

import Router from "./routes/routes";

function App() {
  return (
    <>
    <div className="App bg-black"> 
      <Navbar />

        


      <Router />
      </div>
    </>
  );
}

export default App;