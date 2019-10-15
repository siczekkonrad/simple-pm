import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => (
    <ul className='Menu'>
        <Link to='/home'>Home</Link>
        <Link to='/taskboard'>Taskboard</Link>
        <Link to='/contact'>Contact</Link>
    </ul>
)

export default Menu;