import React from "react";

function Banner({ end, guessNum, answer }) {
  const result = end === 'win' ? 'happy' : 'sad';
  const happy = (
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{guessNum} guesses</strong>.
    </p>
  );

  const sad = (
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );

  return (
    end &&
      <div className={`${result} banner`}>
        {result === 'happy'
          ? happy
          : sad}
      </div>  
  );
}

export default Banner;
