import { useContext, useEffect, useState } from 'react';
import './Footer.css';
import { useInView } from 'react-intersection-observer';
import SearchContext from '../../store/SearchContext';
import { searchGoogleHandler } from '../form/Form';
import Spinner from '../Spinner/Spinner';

// !Main component
const Footer = ({ pos }) => {
  const { ref, inView, entry } = useInView();
  const { input, setNextDataHandler, data } = useContext(SearchContext);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (inView && pos === 'static' && data && data.items && entry.boundingClientRect.y > 250) {
      setShowSpinner(true);
      searchGoogleHandler(input, setNextDataHandler, data.start).then(() => {
        setShowSpinner(false);
      });
    }
    //eslint-disable-next-line
  }, [inView, pos]);

  return (
    <>
      {showSpinner && <Spinner />}
      <footer style={{ position: pos }} ref={ref}>
        <div className='footer__contents--left'>
          <a href='https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1'>
            About
          </a>
          <a href='https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>
            Advertising
          </a>
          <a href='https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1'>
            Business
          </a>
          <a href='https://google.com/search/howsearchworks/?fg=1'>How Search Works</a>
        </div>
        <div className='footer__contents--right'>
          <a href='https://policies.google.com/privacy?hl=en-IN&fg=1'>Privacy</a>
          <a href='https://policies.google.com/terms?hl=en-IN&fg=1'>Terms</a>
          <a href='#'>Settings</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
