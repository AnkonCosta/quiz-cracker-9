import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center shadow-lg z-10 sticky bg-white top-0 px-12 py-5 '>
            <div>
                <h2 className='text-2xl text-blue-500 font-bold'>Skill Set</h2>
            </div>
            <div className='font-bold text-blue-500 '>
                <Bars3Icon onClick={() => setOpen(!open)} className='w-8 md:hidden'></Bars3Icon>
                <div className={`md:static text-center ml-36 md:block flex flex-col  items-start absolute left-24 ${open ? 'top-5px  ' : 'top-[-100px]'}`}>
                    <Link className='mx-4 w-24 bg-white block md:inline' to='/'>Home</Link>
                    <Link className='mx-4 w-24 bg-white block md:inline' to='/statistics'>Statistics</Link>
                    <Link className=' block w-24 bg-white mx-4 md:inline' to='/blog'>Blog</Link>
                    <Link className=' block w-24 bg-white mx-4 md:inline' to='/contact'>Contact</Link>
                </div>

            </div>
        </div>
    );
};

export default Header