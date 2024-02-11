import React, { useContext} from "react";
import "../css/ContentFeed.css";
import Post from "./Post";
import Data from "../Data";
import QuestionContext from "../QuestionContext";

const ContentFeed = ({ search,type }) => {
  // Extracting question and answer from context
  const { posts } = useContext(QuestionContext);

// Retrieving username from local storage
  const username = localStorage.getItem("username");

 
 // Filter Data based on search query
 const filteredData = posts.filter((item) => {
  const isQuestionMatch = typeof item.question === "string" && item.question.toLowerCase().includes(search.toLowerCase());
  const isTypeMatch = type ? item.subject === type : true;
  return isQuestionMatch && isTypeMatch;
});

  console.log(Data);
 

  return (
    <div className="feed">
     {filteredData.map((item) => (
        <Post key={item.id} postId={item.id} username={username} />
      ))}
    </div>
  );
};

export default ContentFeed;
