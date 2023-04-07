import React, { useEffect, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [end, setEnd] = useState('');
  // To make debugging easier, we'll log the solution in the console.
  useEffect(() => {
    console.info({ answer });
  }, [answer]);

  const handleGuess = (guess) => {
    const newGuess = { id: Math.random(), label: guess };
    setGuesses([...guesses, newGuess]);

    if (guess === answer
      || guesses.length === NUM_OF_GUESSES_ALLOWED - 1){
      setEnd( guess === answer ? 'win' : 'lose');
    }
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setEnd('');
  };

  return (
    <>
      {end && <button key='restart' onClick={handleRestart}>Restart</button>}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} end={end} />
      <Banner end={end} guessNum={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
