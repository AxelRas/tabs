import React from 'react';
import data from './people.json';
import People from './components/People';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: data.people,
      currentDisplay: data.people.filter(person => person.id === 4),
      currentId: 4
    }

    this.display = this.display.bind(this);
  }

  componentDidMount(){
    $("#btn-" + this.state.currentId).css({"color":"rgb(0, 156, 156)", "border-left": "2px solid rgb(0, 156, 156)"});
  }

  display(id) {    
    $("#btn-" + this.state.currentId).css({"color":"", "border-left": ""});
    $("#btn-" + id).css({"color":"rgb(0, 156, 156)", "border-left": "2px solid rgb(0, 156, 156)"});

    this.setState({
      currentDisplay: data.people.filter(person => person.id === id),
      currentId: id
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
