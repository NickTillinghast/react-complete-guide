import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
// import Validation from "./ValidatonComponent/ValidationComponent";
// import CharComponent from "./CharComponent/CharComponent";


class App extends Component {
  state = {
    persons: [
      { id: "a", name: 'Nick', age: 40 },
      { id: "b", name: 'Cora', age: 7 },
      { id: "c", name: 'Amber', age: 38 }
    ],
    otherState: "some other value",
    showPersons: false,
    // userInput: ""

  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangeHadler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  // inputChangeHandler = (e) => {
  //   this.setState({ userInput: e.target.value })
  // }

  // deleteCharHandler = (index) => {
  //   const text = this.state.userInput.split('');
  //   text.splice(index, 1);
  //   const updatedText = text.join('');
  //   this.setState({ userInput: updatedText })
  // }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e) => this.nameChangeHadler(e, person.id)}
            />
          })}
        </div>
      )
    }
    // const charlist = this.state.userInput.split('').map((char, index) => {
    //   return <CharComponent
    //     character={char}
    //     key={index}
    //     clicked={() => this.deleteCharHandler(index)

    //     } />
    // })

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Switch Name</button>
        {persons}
        {/* <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charlist} */}
      </div>

    );
  }
}
export default App;
