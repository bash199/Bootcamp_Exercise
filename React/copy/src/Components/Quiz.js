import './Quiz.css';
import  QuizTitle  from "./QuizTitle";
import  Q1  from "./Q1";
import  Q2  from "./Q2";
function Quiz() {
  return (
    <div className="box">
      <QuizTitle/>
      <Q1/>
      <Q2/>
    </div>
  );
}

export default Quiz;
//  <div className='bbb'> 
//  <h1>How Do You Like Front End?</h1>
// <h4 >How Much You Love Front End?</h4>
// <input></input>
// </div> 