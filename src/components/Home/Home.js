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
                <img src='computer.jpg' alt="" />
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