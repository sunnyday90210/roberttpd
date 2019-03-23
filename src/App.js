import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CustomerTable from './components/Table/CustomerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    customers: [],
    searchfield: ''
    
  };
  componentDidMount() {
    axios
      .get('https://api.myjson.com/bins/17zspq')
      .then(response => {
        // console.log(response);
        this.setState({
          customers: response.data
        });
      })
      .catch(err => console.log(err));
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }



   
      
  render() {
    const filteredCustomers = this.state.customers.filter(customer => {
      return customer.patientName.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <SearchBar searchChange={this.onSearchChange}/>
        <CustomerTable customers={filteredCustomers} />
      </div>
    );
  }
}

export default App;
