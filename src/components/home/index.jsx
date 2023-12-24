import React from 'react';
import HomeHeader from './home-header/HomeHeader';
import Main from './main-section/Main';
import Footer from '../UI/footer/Footer';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Main />
      <Footer pos='fixed' />
    </>
  );
};

export default Home;
