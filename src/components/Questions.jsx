import React from 'react'
import MathJax from 'react-mathjax';
import { AiOutlineCalculator } from 'react-icons/ai';

const Questions = ({easy_questions, mid_questions, hard_questions, itr, score, handleClick1, handleClick2, handleClick3, mode}) => {

    

  return (
    <>
        {mode !== '' ? <div className="flex flex-col justify-center items-center h-screen text-white">
        <h1 className={`${mode === 'easy' ? 'text-green-400' : mode === 'mid' ? 'text-yellow-400' : mode === 'hard' ? 'text-red-400' : null} relative text-3xl`}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</h1>
        <h1 className='text-cyan-200 font-bold relative bottom-[180px] text-3xl'>Mathsy</h1>
        <p className='text-cyan-500 relative bottom-[210px] left-[80px] text-3xl'><AiOutlineCalculator /></p>
          <div className="w-[500px] h-[450px] bg-gray-500 border-[3px] border-gray-600 rounded-md">
            <div className="flex items-center justify-center mt-2 font-bold text-2xl">
            {mode === 'easy' ? <h1 className='relative top-5 text-xl'><MathJax.Node inline formula={easy_questions[itr].q} /></h1> : null}
            {mode === 'mid' ? <h1 className='relative top-5 text-xl'><MathJax.Node inline formula={mid_questions[itr].q} /></h1> : null}
            {mode === 'hard' ? <h1 className='relative top-5 text-xl'><MathJax.Node inline formula={hard_questions[itr].q} /></h1> : null}
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-10 text-white">
                <div onClick={handleClick1} className=" hover:bg-gray-900 rounded-md w-[400px] h-[80px] bg-gray-700 flex items-center justify-center text-2xl hover:cursor-pointer">
                        {mode === 'easy' ? <p className='text-center'><MathJax.Node inline formula={easy_questions[itr].o1} /></p> : mode === 'mid' ? <p className='text-center'><MathJax.Node inline formula={mid_questions[itr].o1} /></p> : mode === 'hard' ? <p className='text-center'><MathJax.Node inline formula={hard_questions[itr].o1} /></p> : null }
                </div>
                <div onClick={handleClick2} className="hover:bg-gray-900 rounded-md w-[400px] h-[80px] bg-gray-700 flex items-center justify-center text-2xl hover:cursor-pointer">
                {mode === 'easy' ? <p className='text-center'><MathJax.Node inline formula={easy_questions[itr].o2} /></p> : mode === 'mid' ? <p className='text-center'><MathJax.Node inline formula={mid_questions[itr].o2} /></p> : mode === 'hard' ? <p className='text-center'><MathJax.Node inline formula={hard_questions[itr].o2} /></p> : null }
                </div>
                <div onClick={handleClick3} className="hover:bg-gray-900 rounded-md w-[400px] h-[80px] bg-gray-700 flex items-center justify-center text-2xl hover:cursor-pointer">
                {mode === 'easy' ? <p className='text-center'><MathJax.Node inline formula={easy_questions[itr].o3} /></p> : mode === 'mid' ? <p className='text-center'><MathJax.Node inline formula={mid_questions[itr].o3} /></p> : mode === 'hard' ? <p className='text-center'><MathJax.Node inline formula={hard_questions[itr].o3} /></p> : null }
                </div>
                <h1 className='text-2xl mt-4 text-green-200'>Click The Correct Option!</h1>
            </div>
          </div>
          <h1 className='mt-2 text-xl text-red-500 font-bold'>Score: {score}</h1>
        </div> : null}
        

    </>
  )
}

export default Questions


