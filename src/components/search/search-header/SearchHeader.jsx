import { useState } from 'react';

import './SearchHeader.css';
import Form from '../../UI/form/Form';
import Nav from '../../UI/app-drawer/Nav';

const SearchHeader = () => {
  const [classActive, setClassActive] = useState(false);

  return (
    <>
      <header>
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
        </div>

        <a href='https://www.google.com/' className='google-home'>
          <img
            src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png'
            alt='Go to Google Home'
          />
        </a>

        <Form mWidth='initial' />

        <div className='header__contents--right'>
          <div className='header__content--settings'>
            <a href='#'>
              <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'></path>
                <circle cx='12' cy='12' r='3.5'></circle>
              </svg>
            </a>
          </div>
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

export default SearchHeader;
