import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

    state = {
        persons: [
            {name: "1", age: 27},
            {name: "2", age: 28},
            {name: "3", age: 29}
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState(
            {
                persons: [
                    {name: newName, age: 27},
                    {name: "21", age: 28},
                    {name: "31", age: 292}
                ]
            }
        );
    }

    nameChangedHandler = (event) => {
        this.setState(
            {
                persons: [
                    {name: "11", age: 27},
                    {name: event.target.value, age: 28},
                    {name: "31", age: 292}
                ]
            }
        );
    }

    togglePersonHandler = () => {

        const doesShowPerson = this.state.showPersons;
        this.setState({
            showPersons: !doesShowPerson
        })
    }

    deletePersonHandler = (index) => {

        const persons = [...this.state.persons]
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })

    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: "pointer"
        }

        let persons = null;

        if (this.state.showPersons) {

            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person click={this.deletePersonHandler.bind(this, index)}
                                           name={person.name} age={person.age}/>
                        })
                    }
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi , I'm React App</h1>
                <p>this is really working</p>
                <button style={style}
                        onClick={this.togglePersonHandler}>Switch name
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
