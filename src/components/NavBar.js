import { useState } from "react";
import "../css/NavBar.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import QuestionContext from "../QuestionContext";

function NavBar({ setSearch }) {
  // State for controlling the modal
  const [modelOpen, setModelOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // Destructuring required functions and states from context
  const { setQuestion, setAnswer, addPost } = useContext(QuestionContext);
 
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");
 
  // Retrieving username from local storage
  const username = localStorage.getItem("username");

  // Function to handle saving questions and answers
  const handleSave = () => {
  setQuestion(questionInput);
  setAnswer(answerInput);

    // Adding post using context function
    addPost(questionInput, answerInput);
// Retrieve existing questions from local storage or initialize to empty array
const existingQuestions = JSON.parse(localStorage.getItem('questions')) || [];

// Add the new question and answer to the existing list
const newQuestion = { question: questionInput, answer: answerInput };
const updatedQuestions = [...existingQuestions, newQuestion];

// Store the updated list back to local storage
localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    
    setModelOpen(false);
    setAnswerInput("");
    setQuestionInput("");
  };
 
  
  // Function to handle search
  const handleSearch = () => {
    setSearch(searchInput);
  };

  return (
    <header>
      <div class="logo">
        <h1>Technical Q&A</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <a href="#home">
              <i class="fa-regular fa-user"></i>
              {username}
            </a>
          </li>
        </ul>
      </nav>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search Question..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <button className="question" onClick={() => setModelOpen(true)}>Add Question</button>
      
        

      {/* Modal for adding question */}
      <Modal
        open={modelOpen}
        onClose={() => setModelOpen(false)}
        center
        closeOnOverlayClick={false}
        style={{
          overlay: {
            width: "680px",
            height: "550px",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            top: "50%",
            left: "50%",
            marginTop: "-250px",
            marginLeft: "-350px",
          },
        }}
      >
        <div className="model-title">
          <h3>Add question</h3>
          <br />
          <div className="modal-body">
            <input
              type="text"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            />
            <br />
            <p>
              asked by-{" "}
              <span className="name" style={{ color: "blue" }}>{username}</span>
            </p>
            <br />
          </div>
          <div className="modal__answer">
            <textarea
              value={answerInput} type="text"
              onChange={(e) => setAnswerInput(e.target.value)}
              placeholder="Enter Your Answer"
              />
          </div>
          <br />
          <div className="modal__button">
            <button className="cancel" onClick={() => setModelOpen(false)}>Cancel</button>
            <button type="submit" className="add" onClick={handleSave}>Save</button>
          </div>
        </div>
      </Modal>
     
    </header>
  );
}

export default NavBar;
