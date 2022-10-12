import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const courses = useLoaderData().data;
    // console.log(courses.data)
    return (
        <div className='w-10/12 my-12 mx-auto'>
            <div className='border border-blue-200 shadow-lg text-3xl p-6 text-white text-bold  md:flex justify-between items-center font-bold'>
                <img className='md:w-6/12' src='computer.jpg' alt="" />
                <h1 className='text-blue-500 text-4xl'>Let You Know Your Skills</h1>
            </div>

            {/* courses starts here */}
            <section className='grid md:grid-cols-4  gap-6 my-12'>
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </section>
            {/* courses ends here */}

        </div>
    );
};

export default Home;