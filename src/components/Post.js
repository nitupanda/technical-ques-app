import React, { useState, useEffect } from "react";
import "../css/Post.css";
import Data from "../Data";
import Modal from "react-responsive-modal";

// Function to retrieve answers from local storage
const getAnswer = () => {
  let list = localStorage.getItem("addedAns");

  if (list) {
    return JSON.parse(localStorage.getItem("addedAns"));
  } else {
    return [];
  }
};

const Post = ({ postId, username }) => {
  const [answer, setAnswer] = useState("");
  const [addAns, setAddAnswer] = useState(getAnswer());
  const [isYellow, setIsYellow] = useState(false);
  const [isYellowDown, setIsYellowDown] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);

  // Effect to update added answers when postId changes
  useEffect(() => {
    const savedAnswers = localStorage.getItem(`addedAns_${postId}`);
    if (savedAnswers) {
      setAddAnswer(JSON.parse(savedAnswers));
    }
  }, [postId]);

   // Function to handle adding an answer
  const addAnswerClick = (e) => {
    e.preventDefault();
    const updatedAnswers = [...addAns,{ answer, email: localStorage.getItem("currentuser") }];
    setAddAnswer(updatedAnswers);
    setAnswer("");
    setModelOpen(false);
    localStorage.setItem(`addedAns_${postId}`, JSON.stringify(updatedAnswers));
  };

  // Functions to handle thumbs click
  const handleThumbsUpClick = () => {
    setIsYellow(!isYellow);
    setIsYellowDown(false);
  };
   const handleThumbsDownClick = () => {
    setIsYellow(false);
    setIsYellowDown(!isYellowDown);
  };

  // Find post data for the given postId
  const data = Data.find((item) => item.id === postId);

  if (!data) {
    // Render a message or component indicating that the post with the specified postId was not found
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <div className="post-info">
        <h5>
          <i class="fa-regular fa-user"></i> {username}
        </h5>
      </div>
      <div className="post-body">
        <div className="post-ques">
          <h4>Q.{data.question}</h4>
          <button className="post-button" onClick={() => setModelOpen(true)}>
            Answer
          </button>
        </div>
        <div className="post-answer">
          <p>{data.answer}</p>
          {addAns.map((item, index) => (
            <div key={index} className="new-ans">
              <span> {item.answer}</span>
              <span style={{ color: "blue"}}>
                 {item.email}
              </span>
            </div>
          ))}
          {data.img ? <img src={data.img} alt="img" /> : null}
        </div>
      </div>
      <div className="post-footer">
        <div className="post-action">
          <i
            className="fa-solid fa-thumbs-up"
            onClick={handleThumbsUpClick}
            style={{ color: isYellow ? "rgb(46, 150, 46)" : "initial" }}
          ></i>

          <i
            className="fa-solid fa-thumbs-down"
            onClick={handleThumbsDownClick}
            style={{ color: isYellowDown ? "red" : "initial" }}
          ></i>
        </div>
      </div>

      {/* Modal for Answer */}
      <Modal
        open={modelOpen}
        onClose={() => setModelOpen(false)}
        center
        closeOnOverlayClick={false}
      >
        <div className="modal">
          <h4>Enter your answer</h4>
          <br />
          <input
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
          <br />
          <button onClick={addAnswerClick}>Save</button>
        </div>
      </Modal>
    </div>
  );
};

export default Post;
