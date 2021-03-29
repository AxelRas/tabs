import React from 'react';
import data from './people.json';
import People from './components/People';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: data.people,
      currentDisplay: data.people.filter(person => person.id === 3)
    }

    this.display = this.display.bind(this);
  }

  display(id) {
    this.setState({
      currentDisplay: data.people.filter(person => person.id === id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Experience</h1>
        </div>
        <People people={this.state.people} displayButton={this.display} current={this.state.currentDisplay} />
      </div>
    );
  }
}

export default App;
