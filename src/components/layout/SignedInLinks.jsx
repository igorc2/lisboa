import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='right'>
        <li><NavLink to='/'>new project</NavLink></li>
        <li><NavLink to='/'>logout</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  );
}

export default SignedInLinks;
