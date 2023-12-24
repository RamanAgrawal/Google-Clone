import './Nav.css';

const Nav = ({ classActive, classActiveHandler }) => {
  return (
    <>
      <nav className={`app-drawer ${classActive ? 'active' : ''}`}>
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png'
          alt='Go to Home'
        />
        <ul>
          <li>
            <span className='material-icons'>home</span>
            Home
          </li>
          <li>
            <span className='material-icons'>history</span>
            Search history
          </li>
          <li>
            <span className='material-icons'>collections_bookmark</span>
            Collections
          </li>
          <li>
            <span className='material-icons'>manage_search</span>
            Offline searches
          </li>
        </ul>
        <ul>
          <li>
            <span className='material-icons'>settings</span>
            Settings
          </li>
          <li>
            <span className='material-icons'>admin_panel_settings</span>
            Your data in search
          </li>
          <li>
            <span className='material-icons'>explicit</span>
            Hide explicit results: off
          </li>
          <li>
            <span className='material-icons'>dark_mode</span>
            Dark theme: off
          </li>
          <li>
            <span className='material-icons'>plagiarism</span>
            How search works
          </li>
          <li>
            <span className='material-icons'>help</span>
            Help
          </li>
          <li>
            <span className='material-icons'>feedback</span>
            Send feedback
          </li>
        </ul>
      </nav>
      <div
        className='backdrop'
        style={{ display: classActive ? 'block' : 'none' }}
        onClick={() => {
          classActiveHandler(false);
        }}
      ></div>
    </>
  );
};

export default Nav;
