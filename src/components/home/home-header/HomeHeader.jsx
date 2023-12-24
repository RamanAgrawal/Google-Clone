import { useState } from 'react';
import Nav from '../../UI/app-drawer/Nav';
import './HomeHeader.css';

const HomeHeader = () => {
  const [classActive, setClassActive] = useState(false);

  return (
    <>
      <header style={{ marginBlock: 0 }}>
        <div className='header__contents--left'>
          <button
            className='ham__button'
            onClick={() => {
              setClassActive(!classActive);
            }}
          >
            <span className='button-bar'></span>
            <span className='button-bar'></span>
            <span className='button-bar'></span>
          </button>
          <a href='#'>ALL</a>
          <a href='https://www.google.co.in/imghp?hl=en&ogbl'>IMAGES</a>
        </div>

        <div className='header__contents--right'>
          <a href='https://mail.google.com/mail/&ogbl'>Gmail</a>
          <a href='https://www.google.co.in/imghp?hl=en&ogbl'>Images</a>
          <div className='header__content--products'>
            <a href='#'>
              <svg viewBox='0 0 24 24'>
                <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z'></path>
              </svg>
            </a>
          </div>
          <div className='header__content--gmail'>
            <a href='#'>
              <img src='https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg' />
            </a>
          </div>
        </div>
      </header>

      <Nav classActive={classActive} classActiveHandler={setClassActive} />
    </>
  );
};

export default HomeHeader;
