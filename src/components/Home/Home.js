import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const courses = useLoaderData().data;
    // console.log(courses.data)
    return (
        <div className='w-10/12 my-12 mx-auto'>
            <div className='border border-gray-100 text-3xl py-6 text-white text-bold bg-blue-400'>
                <h2>Have Your Skill Test </h2>
            </div>

            {/* courses starts here */}
            <section className='grid grid-cols-2'>
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