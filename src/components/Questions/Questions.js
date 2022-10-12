import React, { useState } from 'react';
import './Questions.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({ allQuestion, questions }) => {
    const { id, question, options, correctAnswer } = allQuestion;


    const answer = (e) => {
        const same = questions.find(q => q.correctAnswer === e.target.innerText);
        if (same) {
            toast('Your answer is correct.')
            return
        }
        else {
            toast('Your answer is wrong.')
        }
    }

    // for showing correct answer  
    const [ans, setAns] = useState();

    const eyeBtn = () => {
        console.log(correctAnswer)
        const newAns = correctAnswer;
        setAns(newAns)
    }

    return (

        <div>


            <div className='my-12 border bg-white text-black  drop-shadow-2xl p-5'>
                <div className='flex justify-around'>
                    <h2><code className='text-xl font-bold'>{question} </code></h2>
                    <p title='Show Correct Answer.' onClick={eyeBtn}><EyeIcon className="h-6 w-6 text-blue-500" /> </p>
                </div>
                <div className=' text-black py-3 shadow shadow-lg'>
                    <h1 className='font-bold'>{'Correct Answer:'} <span className='text-blue-600'>{ans}</span> </h1>
                </div>

                <div className='grid grid-cols-1 gap-5 my-5' >

                    {
                        options.map(option => <div className="form-control  text-start px-12" >
                            <label className="label  cursor-pointer">
                                <input type="radio" name="radio-6" className="radio checked:bg-red-500" />
                                <span onClick={answer}> {option}</span>

                            </label>
                            <ToastContainer />


                        </div>
                        )
                    }

                </div>

            </div>

        </div >
    );
};

export default Questions;