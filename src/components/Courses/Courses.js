import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { logo, name, id, total } = course;
    return (
        <div className='bg-black border border-white rounded-md p-5 drop-shadow-xl'>
            <img className='rounded-md border border-white p-6 hover:p-4' src={logo} alt="" />
            <h1 className='text-2xl my-4 text-white'>{name}</h1>
            <h1 className='text-white font-medium text-md mb-3'>Total Questions: {total}</h1>
            <button className='text-white border border-white py-2 px-4 hover:bg-white hover:text-green-600 hover:font-semibold'><Link to={`/quiz/${id}`}>Test Your IQ</Link></button>
        </div >
    );
};

export default Courses;