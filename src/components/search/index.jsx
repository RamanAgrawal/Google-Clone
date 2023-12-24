import Main from './main-section/Main';
import SearchNav from './nav-section/SearchNav';
import SearchHeader from './search-header/SearchHeader';
import Footer from '../UI/footer/Footer';

const Search = () => {
  return (
    <>
      <SearchHeader />
      <SearchNav />
      <Main />
      <Footer pos='static' />
    </>
  );
};

export default Search;
