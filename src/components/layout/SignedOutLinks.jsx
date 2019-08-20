import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavLink to='/signup'><Button color="inherit">Cadastrar</Button></NavLink>
      <NavLink to='/signin'><Button color="inherit">Login</Button></NavLink>
    </React.Fragment>
  );
}

export default SignedOutLinks;