import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { faSearch } from '@fortawesome/fontawesome-free';



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Temperature() {
  const randomNumber = getRandomNumber(-10, 30);
  const relatedNumbers = Array.from({ length: 4 }, () =>
    getRandomNumber(randomNumber - 5, randomNumber + 5)
  );

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <p>Related Numbers:</p>
      <ul>
        {relatedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default getRandomNumber;


