import React, { Component } from 'react';
import './App.css';
import './ValidationComponent/ValidationComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    strlength: 0,
    strcontents: "",
  };

  strLengthChangeHandler = (event) => {
    // I need a quick lookup for writing these things...
    this.setState({
      strlength: event.target.value.length,
      strcontents: event.target.value
    });
  }

  deleteCharacterHandler = (idx) => {
    //console.log("delete char called");
    const currentstr = this.state.strcontents.split("");
    currentstr.splice(idx, 1);
    const newstring = currentstr.join("");
    this.setState({
      strlength: newstring.length,
      strcontents: newstring
    })
  }
  render() {
    // "Char Woman" was a Monty Python character, in one of the Gilliam animations.
    let charwomen = (
      <div>
        {this.state.strcontents.split("").map((letter, idx) => {
          return <CharComponent
            key={idx}
            click={() => this.deleteCharacterHandler(idx)}
            letter={letter}
            idx={idx} />
        })
        }
      </div>
    );

    return (
      <div className="App">
        <ol>
          <li className="struck">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li className="struck">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li className="struck">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li className="struck">Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li className="struck">Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li className="struck">When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input type="text"
          onChange={this.strLengthChangeHandler}
          value={this.state.strcontents}></input>
        <p>Current length of the input: {this.state.strlength}</p>
        <ValidationComponent
          strlength={this.state.strlength}
        />
        {charwomen}
      </div>

    );
  }
}

export default App;
