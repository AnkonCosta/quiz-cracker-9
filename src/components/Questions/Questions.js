import React from 'react';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({ allQuestion, questions }) => {
    const { id, question, options, correctAnswer } = allQuestion;
    console.log(id)
    const notify = (event) => {
        const r = questions.find(qs => qs.correctAnswer === event.target.innerText)
        console.log(r)
    }

    return (

        <div>

            <div className='my-12 border bg-white text-black  drop-shadow-2xl p-5'>
                <h2><code className='text-xl font-bold'>{question}</code></h2>
                {/* <div className='grid grid-cols-2 gap-5 my-5' >
                    {
                        options.map(option => <p className='border border-black '>{option}</p>)
                    }
                </div> */}

                <div className='grid grid-cols-1 gap-5 my-5' >
                    {
                        options.map(option => <div className="form-control  text-start px-12" >
                            <label onClick={notify} className="label  cursor-pointer">
                                <input type="radio" name="radio-6" className="radio checked:bg-red-500" />
                                <span className="label-text">{option}</span>

                                <ToastContainer />

                            </label>
                        </div>
                        )
                    }

                </div>

            </div>

        </div >
    );
};

export default Questions;