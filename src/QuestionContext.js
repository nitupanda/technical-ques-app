import { createContext,  useState } from "react";
import Data from "./Data";

// Creating context
const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [posts, setPosts] = useState(Data);


   // Function to add a new post
  const addPost = (newQuestion, newAnswer) => {
    
     // Adding new post to the posts array
     Data.unshift( { id: Date.now(), question: newQuestion, answer: newAnswer })
     setPosts(Data);
    
  };
  
  
  return (
    <QuestionContext.Provider
      value={{ question, setQuestion, answer, setAnswer, posts, addPost }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContext;
