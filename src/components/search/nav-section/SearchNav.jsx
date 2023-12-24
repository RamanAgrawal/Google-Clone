import './SearchNav.css';

const SearchNav = () => {
  return (
    <div className='nav-section'>
      <a href='#'>
        <span className='material-icons'> search </span>
        All
      </a>
      <a href='#'>
        <span className='material-icons'> image </span>
        Images
      </a>
      <a href='#'>
        <span className='material-icons'> slideshow </span>
        Videos
      </a>
      <a href='#'>
        <span className='material-icons'> article </span>
        News
      </a>
      <a href='#'>
        <span className='material-icons'> class </span>
        Books
      </a>
      <a href='#'>
        <span className='material-icons'> more_vert </span>
        More
      </a>
      <a href='#'> Tools </a>
    </div>
  );
};

export default SearchNav;
