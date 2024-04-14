import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import LoginForm from './loginForms';
import RegisterForm from './registerForms';
import QuotesList from './quotesList';
import UsersList from './usersList';
// Importa tus otros componentes aquí

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/quotes" component={QuotesList} />
          <PrivateRoute exact path="/users" component={UsersList} />
          {/* Agrega tus otras rutas aquí */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
