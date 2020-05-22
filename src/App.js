import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox  from './components/searchbox/searchbox.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }; 
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredRobots = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className = "App">
        <h1>Monsters Roledex</h1>
        <SearchBox handleChange={this.handleChange}/>
        <CardList monsters ={filteredRobots} />
      </div>
    );
  }
}

export default App;
