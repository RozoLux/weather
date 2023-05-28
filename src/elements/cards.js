import React from 'react';
import '../Styles.css';
import { useState , useEffect } from 'react';
import {getRandomNumber} from '../weather/temperature';



const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3',
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4',
    },
    {
      title: 'Card 5',
      description: 'This is the description for Card 5',
    },
  ];

  const startDate = new Date(); // Get the current date
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day

  return (
    <div className="card-container">
      {cardsData.map((card, index) => {
        const date = new Date(startDate.getTime() + index * oneDay);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        const randomNumber = getRandomNumber(-10, 30);


        return (
          <Card
            key={index}
            title={`${formattedDate}`}
            description={`${randomNumber}`}
            
          />
        );
      })}
    </div>
  );
};

export default Cards;

