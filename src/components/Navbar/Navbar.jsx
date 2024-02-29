import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className='text-formating'>Home</Link>
            <Link to="/list" className='text-formating'>History</Link>
        </div>
    );
};

export default Navbar;