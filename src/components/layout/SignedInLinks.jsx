import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';

const SignedInLinks = (props) => {
  return (
    <div>
      <Button color="inherit"><NavLink to='/create'>Criar tarefa</NavLink></Button>
      <Button color="inherit"><a onClick={props.signOut}>Log Out</a></Button>
      <NavLink to='/' className='btn btn-floating pink lighten-1'>
        {props.profile.initials}
      </NavLink>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
