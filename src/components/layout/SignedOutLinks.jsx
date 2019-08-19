import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedOutLinks = () => {
  return (
    <div>
      <Button color="inherit"><NavLink to='/signup'>Cadastrar</NavLink></Button>
      <Button color="inherit"><NavLink to='/signin'>Login</NavLink></Button>
    </div>
  );
}

export default SignedOutLinks;