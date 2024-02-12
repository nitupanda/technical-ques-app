import { useState } from "react";
import "../css/NavBar.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setSearch }) {
  // State for controlling the modal
  const [modelOpen, setModelOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  
  const navigate = useNavigate();
  
// Retrieving username from local storage
  const username = localStorage.getItem("currentuser");

  const handleLogout = () => {
    let activeuser = localStorage.getItem("currentuser");
    let data = localStorage.getItem(JSON.parse(activeuser));
    let newdata = JSON.parse(data);
    newdata.active = false;
    let actuser = JSON.parse(activeuser);
    localStorage.setItem(actuser, JSON.stringify(newdata));

    navigate("/");
  };

  // Function to handle saving questions and answers
  const handleSave = () => {
    let quests = localStorage.getItem("questions");
    let prevquest = JSON.parse(quests);
    if (quests != null) {
      let obj = {
        id: questionInput,
        question: questionInput,
        answer: [
          {
            content: answerInput,
            postedby: JSON.parse(JSON.stringify(username)) // Save the username of the poster
          }
        ],
        category: selectedCategory,
        postedby:JSON.parse(username)
      };
      prevquest.push(obj);
      localStorage.setItem("questions", JSON.stringify(prevquest));
    } else {
      let obj = {
        id: questionInput,
        question: questionInput,
        answer: [
          {
            content: answerInput,
            postedby: JSON.parse(username)// Save the username of the poster
          }
        ],
        category: selectedCategory,
        postedby: JSON.parse(username)
      };
      localStorage.setItem("questions", JSON.stringify([obj]));
    }
    setModelOpen(false);
    setAnswerInput("");
    setQuestionInput("");
    window.location.reload();
  };

  // Function to handle search
  const handleSearch = () => {
    setSearch(searchInput); // Pass search input to parent component
  };

  return (
    <header>
      <div className="logo">
        <h1>Technical Q&A</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <a href="#home">
              <i className="fa-regular fa-user"></i>
              {JSON.parse(username)}
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Question..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button className="question" onClick={() => setModelOpen(true)}>
        Add Question
      </button>

      <li style={{ listStyleType: "none" }}>
    {/* <Link style={{ color: "white" }} onClick={handleLogout}>
        Logout
    </Link> */}
    <li>
            <Link to='/' style={{ color: "white" }} onClick={handleLogout}>Logout</Link> 
          </li>
</li>
          

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
        <h5>Select Category</h5><select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="Select">select</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JAVASCRIPT">JAVASCRIPT</option>
              <option value="ReactJs">ReactJs</option>
              <option value="Angular">Angular</option>
              </select><br/>
            <br/>
          <h3>Add question</h3>
          <div className="modal-body">
            <input
              type="text"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              placeholder="Enter your question"
            />
            <br />
            <p>
              asked by-{" "}
              <span className="name" style={{ color: "blue" }}>
                {username}
              </span>
            </p>
            <br />
          </div>
          <div className="modal__answer">
            <textarea
              value={answerInput}
              type="text"
              onChange={(e) => setAnswerInput(e.target.value)}
              placeholder="Enter Your Answer"
            />
          </div>
          <br />
          <div className="modal__button">
            <button className="cancel" onClick={() => setModelOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="add" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default NavBar;

