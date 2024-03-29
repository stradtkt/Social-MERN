import React, {useEffect, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import {loadUser} from './actions/auth';
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
      store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Navbar/>
                <Route exact={true} path='/' component={Landing}/>
                <section className="container">
                    <Alert/>
                    <Switch>
                        <Route exact={true} path='/login' component={Login}/>
                        <Route exact={true} path='/register' component={Register}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>
    );
}

export default App;
