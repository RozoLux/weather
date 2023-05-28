import React from 'react';
import './Styles.css';
import Title from "./elements/title";
import SearchBar from './elements/city';
import Cards from './elements/cards';
import Temperature from './weather/temperature';

const Home = () => {
  return (
    <div className="Home">
      <Title />
      <SearchBar />
      <Cards />
      <Temperature />
    </div>
  );
}

export default Home;
