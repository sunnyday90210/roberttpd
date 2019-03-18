import React, { Component } from 'react';
import CustomerTable from './components/Table/CustomerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CustomerTable />
      </div>
    );
  }
}

export default App;
