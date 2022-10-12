import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = () => {
    const quiz = useLoaderData().data;
    const { name, id, questions } = quiz;




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


    return (
        <div className='bg-questions '>
            < ToastContainer />
            <div className='py-12 md:w-6/12 mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold'>Quiz of {name}</h1>
                </div>
                <div className='drop-shadow-lg '>
                    {
                        questions.map(allQuestion => <Questions
                            key={allQuestion.id}
                            allQuestion={allQuestion}
                            questions={questions}
                            answer={answer}
                        ></Questions>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizes;