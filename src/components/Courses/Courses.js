import React from 'react';

const Courses = ({ course }) => {
    const { logo, name } = course;
    return (
        <div>
            <img src={logo} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Courses;