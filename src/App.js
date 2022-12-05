import {useState} from 'react'
import FinalScore from './components/FinalScore';
import Questions from './components/Questions';
import MathJax from 'react-mathjax';
import { AiOutlineCalculator } from 'react-icons/ai';

// TODO: Use React Latex For Hard Q's

function App() { // TODO: Add a Firebase Backend to store scores and show off in a leaderboard

  const hard_questions = [{q: `\\lim _{z \\rightarrow \\infty} \\frac{4 z^5}{z^5-42 z}=4`, o1: '2', o2: '4', o3: '99.1', ans: 1},
                    {q: `\\left|z_1-z_2\\right|^2+\\left|z_1+z_2\\right|^2=2\\left(\\left|z_1\\right|^2+\\left|z_2\\right|^2\\right)`, o1: '20', o2: '100', o3: '180', ans: 2},
                    {q: `Solve(P=NP)`, o1: 'Good Luck', o2: 'Have', o3: 'Fun', ans: 3}];


  const easy_questions = [{q: `1+1`, o1: '2', o2: '4', o3: '99.1', ans: 1},
                    {q: `(\\frac{100}{50})^{2}`, o1: '0.4', o2: '4', o3: '10', ans: 2},
                    {q: `\\sqrt{64}+10`, o1: '23', o2: '11', o3: '18', ans: 3}];
  
  const mid_questions = [
  {q: `cos(\\frac{5\\pi}6)`, o1: `-\\frac{\\sqrt{3}}{2}`, o2: `\\frac{\\sqrt{5}}{3}`, o3: `-\\frac{\\sqrt{2}}{3}`, ans: 1},
  {q: `\\lim _{z \\rightarrow 0} \\frac{\\sin (10 z)}{z} `, o1: '20', o2: '10', o3: '30', ans: 2},
  {q: `\\int\\left(10 x^4-4 x-\\frac{3}{\\sqrt{x}}\\right) \\mathrm{d} x`, o1: `-6x^{5}-4x^{3}-6\\sqrt{x}+c`, o2: `-3x^{5}-9x^{2}-3\\sqrt{x}+c`, o3: `-2x^{5}-2x^{2}-6\\sqrt{x}+c`, ans: 3}];


  const [itr, setItr] = useState(0);
  const [score, setScore] = useState(0);

  var ansa = 0;

  const handleClick1 =  () => {
    if (mode === 'easy'){
    ansa = 1;
    if(ansa === easy_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'mid'){
    ansa = 1;
    if(ansa === mid_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'hard'){
    ansa = 1;
    if(ansa === hard_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }
  }

  const handleClick2 =  () => {
    if (mode === 'easy'){
    ansa = 2;
    if(ansa === easy_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'mid'){
    ansa = 2;
    if(ansa === mid_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'hard'){
    ansa = 2;
    if(ansa === hard_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }
  }

  const handleClick3 =  () => {
    if (mode === 'easy'){
    ansa = 3;
    if(ansa === easy_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'mid'){
    ansa = 3;
    if(ansa === mid_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }

  if (mode === 'hard'){
    ansa = 3;
    if(ansa === hard_questions[itr].ans){
      setScore(score + 1);
      
    }
    else{
    }
    setItr(itr + 1);
  }
  }

  const [mode, setMode] = useState('');

  return (
    
    <>  
      <div className="bg-black font-poppins">
        <MathJax.Provider>
          {mode === '' ? <><div className="flex flex-col justify-center items-center h-screen text-white font-bold">
          <h1 className='text-cyan-200 relative bottom-[370px] text-3xl text-center'>Mathsy</h1>
          <p className='text-cyan-500 relative bottom-[400px] left-[80px] text-3xl'><AiOutlineCalculator /></p>
          <h1 className='text-white relative bottom-[40px] text-xl'>Select A Difficulty</h1>
            <div className="">
            <button onClick={() => setMode('easy')} className='px-7 py-3 bg-green-400 border-2 border-green-500 mx-2 rounded-md'>Easy</button>
            <button onClick={() => setMode('mid')} className='px-7 py-3 bg-yellow-400 border-2 border-yellow-500 mx-2 rounded-md'>Mid</button>
            <button onClick={() => setMode('hard')} className='px-7 py-3 bg-red-400 border-2 border-red-500 mx-2 rounded-md'>Hard</button>
            </div></div></> : null}
          
          {itr < easy_questions.length ? <Questions mode={mode} handleClick3={handleClick3} handleClick1={handleClick1} handleClick2={handleClick2} easy_questions={easy_questions} mid_questions={mid_questions} hard_questions={hard_questions} itr={itr} score={score} /> : <FinalScore setItr={setItr} score={score} setMode={setMode} questions={easy_questions} /> }
        </MathJax.Provider>
      </div>
    </>
  );
}

export default App;
