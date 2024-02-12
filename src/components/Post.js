import React, { useState, useEffect } from 'react';
import '../css/Post.css';
import Modal from 'react-responsive-modal';

const Post = ({ postId}) => {
  
  const [data, setData] = useState(null);
  const [answerr, setAnswer] = useState('');
  const [isYellow, setIsYellow] = useState(false);
  const [isYellowDown, setIsYellowDown] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    // Fetch data from local storage
    const storedQuestions = localStorage.getItem('questions');
    const parsedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
    const postData = parsedQuestions.find((item) => item.id === postId);
    setData(postData);
  }, [postId]);

  const addAnswerClick = (e) => {
    e.preventDefault();
  
    // Update local storage with new answer
    const storedQuestions = localStorage.getItem('questions');
    const parsedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
    const updatedQuestions = parsedQuestions.map((item) => {
      if (item.id === postId) {
        const updatedAnswer = {
          content: answerr,
          postedby: JSON.parse(localStorage.getItem('currentuser')) // Save the username of the user who answered
        };
        return { ...item, answer: [...item.answer, updatedAnswer] };
      }
      return item;
    });
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  
    setAnswer('');
    setModelOpen(false);
    window.location.reload();
  };
  

  const handleThumbsUpClick = () => {
    setIsYellow(!isYellow);
    setIsYellowDown(false);
  };

  const handleThumbsDownClick = () => {
    setIsYellow(false);
    setIsYellowDown(!isYellowDown);
  };

  return (
    <div className="post">
      {data && (
        <div className="post-info">
          <h4>{data.postedby}</h4>
        </div>
      )}
      {data && (
        <div className="post-body">
          <div className="post-ques">
            <h4>Q.{data.question}</h4>
            <button className="post-button" onClick={() => setModelOpen(true)}>
              Answer
            </button>
          </div>
          <div className="post-answer">
            {data.answer.map((item, index) => (
              <div key={index} className="new-ans">
               {item.content && <span><b>A: </b> {item.content}</span>} 
               {item.content && <span style={{ color: 'blue' }}>{item.postedby}</span>}
              </div>
            ))}
          </div>
         
        </div>
      )}
      {data && (
        <div className="post-footer">
          <div className="post-action">
            <i
              className="fa-solid fa-thumbs-up"
              onClick={handleThumbsUpClick}
              style={{ color: isYellow ? 'rgb(46, 150, 46)' : 'initial' }}
            ></i>

            <i
              className="fa-solid fa-thumbs-down"
              onClick={handleThumbsDownClick}
              style={{ color: isYellowDown ? 'red' : 'initial' }}
            ></i>
          </div>
        </div>
      )}

      <Modal open={modelOpen} onClose={() => setModelOpen(false)} center closeOnOverlayClick={false}>
        <div className="modal">
          <h3>Enter your answer</h3>
          <textarea  onChange={(e) => setAnswer(e.target.value)} value={answerr} />
          <button onClick={addAnswerClick}>Save</button>
        </div>
      </Modal>
    </div>
  );
};

export default Post;


