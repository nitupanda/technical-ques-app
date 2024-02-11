import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { QuestionProvider } from "./QuestionContext";

function App() {
  return (
    <div className="App">
     {/* Wrap the Routes in the QuestionProvider to provide context */}
      <QuestionProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </QuestionProvider>
    </div>
  );
}

export default App;
