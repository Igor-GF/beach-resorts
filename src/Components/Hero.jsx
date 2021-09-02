import React from 'react';
import Banner from '../Components/Banner';

const Hero = ({children, hero}) => {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;