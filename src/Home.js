import React from 'react';
import './Styles.css';
import Title from "./elements/title";
import SearchBar from './elements/city';
import Cards from './elements/cards';

const Home = () => {
  return (
    <div className="Home">
      <Title />
      <SearchBar />
      <Cards />
    </div>
  );
}

export default Home;
