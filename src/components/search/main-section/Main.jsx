import './Main.css';
import WebLayout from '../../UI/web-layout/WebLayout';
import { useContext } from 'react';
import SearchContext from '../../store/SearchContext';

const Main = () => {
  const { data } = useContext(SearchContext);

  return (
    <>
      {data && data.items && (
        <main className='search-main'>
          <p className='results'>
            About{' '}
            <span className='total-results'>{data.searchInformation.formattedTotalResults}</span>{' '}
            results (<span className='time-taken'>{data.searchInformation.searchTime}</span>
            seconds)
          </p>
          {data.items.map((site) => {
            let imgUrl =
              (site.pagemap.metatags && site.pagemap.metatags[0]['og:image']) ||
              (site.pagemap.cse_image && site.pagemap.cse_image[0].src) ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAX-ORAphYBlkyTJkKnozAQvztVO8zpET949R1Yx7gw&s';

            return (
              <WebLayout
                key={Math.random()}
                url={site.formattedUrl}
                body={site.snippet}
                title={site.title}
                image={imgUrl}
              />
            );
          })}
        </main>
      )}
    </>
  );
};

export default Main;
