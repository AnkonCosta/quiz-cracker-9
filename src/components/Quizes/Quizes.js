import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizes = () => {
    const quiz = useLoaderData().data;
    const { name, id, questions } = quiz;

    return (
        <div className='bg-questions'>
            <div className='py-12 md:w-6/12 mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold'>Quiz of {name}</h1>
                </div>
                <div className='drop-shadow-lg '>
                    {
                        questions.map(allQuestion => <Questions
                            key={allQuestion.id}
                            allQuestion={allQuestion}
                        ></Questions>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizes;