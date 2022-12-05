import React from 'react'

const FinalScore = ({score, setItr, setMode, questions}) => {

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className={`${score > questions.length * 0.5 ?  'text-green-400' : 'text-red-400'} font-bold text-3xl`}>Final Score: {score} / {questions.length}</h1>
            <button onClick={() => refreshPage()} className='mt-4 px-7 py-3 bg-green-400 border-2 border-green-500 mx-2 rounded-md'>Restart</button>
        </div>
    </>
  )
}

export default FinalScore