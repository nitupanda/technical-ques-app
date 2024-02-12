import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      
    </div>
  );
}

export default App;
