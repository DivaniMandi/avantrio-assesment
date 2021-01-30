import React from 'react';
import Loginpage from './components/loginpage';
import Dashboard from './components/dashboard';
import AuthRoute from './AuthRoute.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Redux components
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <AuthRoute exact path="/login" component={Loginpage} />
              <Loginpage />
            </Switch>
          </div>
        </Router>
      </Provider>
    );

  }
}

export default App;
