
import React, { useEffect, useState } from 'react';
import '../css/ContentFeed.css';
import Post from './Post';

const ContentFeed = ({ search, selectedCategory }) => {

  const [allQuestions, setAllQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const username = localStorage.getItem('currentuser');

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions !== null) {
      const parsedQuestions = JSON.parse(storedQuestions);
      setAllQuestions(parsedQuestions);
      filterQuestions(parsedQuestions, search, selectedCategory);
    }
  }, [search, selectedCategory]); // Update when search query or selected category changes

  const filterQuestions = (questions, query, category) => {
    let filteredData = questions;
    if (category) {
      filteredData = filteredData.filter(question => question.category === category);
    }
    if (query) {
      filteredData = filteredData.filter(question =>
        question.question.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredQuestions(filteredData);
  };

  return (
    <div className="feed">
      {filteredQuestions.length === 0 ? (
        <div className="no-data-message">
          <h1>No questions available. Post your questions now!</h1>
        </div>
      ) : (
        filteredQuestions.map(item => <Post key={item.id} postId={item.id} username={username} />)
      )}
    </div>
  );
};

export default ContentFeed;


