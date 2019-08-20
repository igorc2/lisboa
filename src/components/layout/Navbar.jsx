import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },

  title: {
    flexGrow: 1,
  },
  toolbar: {
    maxWidth: '70%'
  }
}));

const NavBar = (props) => {

  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className='cyan darken-4' position="static">
        <Toolbar className='container'>
          <Typography variant="h5" className={classes.title}>
            <Link to='/' className='brand-logo'>LisbonTasks</Link>
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(
  mapStateToProps
)(NavBar);
