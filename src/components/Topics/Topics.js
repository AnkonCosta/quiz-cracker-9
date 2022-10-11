import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Topics = () => {
    const data = useLoaderData().data;
    return (
        <div >
            <div className='mb-12'>
                <h1 className='text-2xl font-bold'>See the quiz Statistics</h1>
            </div>
            <div className='shadow shadow-xl p-5 ' style={{ width: '80%', margin: '0 auto', height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart width={730} height={250} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="total" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="name" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Topics;