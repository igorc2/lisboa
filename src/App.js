import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
s          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
