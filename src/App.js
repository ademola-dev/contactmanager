import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import EditContact from './component/contacts/EditContact';
import About from './component/pages/About';
import Notfound from './component/pages/NotFound';

import { Provider } from './context';

import './App.css';
import Contact from './component/contacts/Contact';
import NotFound from './component/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header brand="Contact Manager " />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

{
  /* <div className="container">
          <Contact
            name="Ademola Oyamaja"
            email="ardhey101@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Mayowa Oyamaja"
            email="mayowa101@gmail.com"
            phone="333-333-3333"
          />
        </div> */
}
