import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../../img/img1.png";


import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    
  }

  return (
    <div id="category">
      <h2>Escolha uma trilha 👇🏻</h2>
      <div>
      <img src={Category} alt="Categoria do Quiz" />
      </div>
      <div id="botao">
      {quizState.questions.map((question) => (
        <button 
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}
      </div>
     
    </div>
  );
};

export default PickCategory;