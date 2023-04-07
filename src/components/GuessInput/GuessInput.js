import React, { useState } from "react";
import { LENGTH_OF_GUESS } from "../../constants";

function GuessInput({ handleGuess, end }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > LENGTH_OF_GUESS)
      return;
    setInput(value.toUpperCase());
  };

  const handleSubmit = () => {
    if(input.length !== LENGTH_OF_GUESS){
      window.alert('Input must have 5 letters.');
      return;
    }
    handleGuess(input);
    setInput('');
  };

  return (
  <form
    className='guess-input-wrapper'
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <label htmlFor='guess-input'>Enter guess:</label>
    <div className='row'>
      <input 
        key='guess-input'
        type='text'
        value={input}
        onChange={handleChange}
        disabled={end ? true : false}
      />  
    </div>
  </form>  
  );
}

export default GuessInput;
