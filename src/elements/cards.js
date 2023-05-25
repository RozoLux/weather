`import React from 'react';
import '../Styles.css';
`
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

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Cards;
