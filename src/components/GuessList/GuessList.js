import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, LENGTH_OF_GUESS } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';


function GuessList({ guesses, answer }) {
  function toSpan(index){
    if (guesses.length <= index) {
      // not guessed yet, populate with blank spans
      const id = Math.random();

      return(
        range(LENGTH_OF_GUESS).map((guessIndex) => (
          <span key={`${id}-${guessIndex}`} className='cell'></span>
        ))
      );
    } else {
      // check guess and populate with letters
      const id = guesses[index].id;
      const guess = checkGuess(guesses[index].label, answer);
      
      return(
        range(LENGTH_OF_GUESS).map((ind) => (
          <span key={`${id}-${ind}`} className={`cell ${guess[ind].status}`}>{guess[ind].letter}</span>
        ))
      );
    }
  };


  return(
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className='guess' key={index}>
          {toSpan(index)}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
