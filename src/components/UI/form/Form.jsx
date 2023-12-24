import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchContext from '../../store/SearchContext';
import './Form.css';

export async function searchGoogleHandler(input, setDataHandler, start) {
  try {
    // console.log('Getting searches');
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyAupFhWF3q5XuHLA4NnuSAjywj3nBtmD8s&cx=f372eba7a5c194e85&q=${input}&start=${start}`,
    );

    if (!res.ok) {
      throw new Error('Something went wrong!!! \nTry another search.');
    }

    const response = await res.json();
    setDataHandler({
      items: response.items,
      searchInformation: response.searchInformation,
      start: start + 10,
    });
  } catch (err) {
    alert(err.message);
  }
}

const Form = ({ toShowButtons, mWidth }) => {
  const { input, setInputHandler, setDataHandler } = useContext(SearchContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.queryId) {
      setInputHandler(params.queryId);
      searchHandlerCaller(params.queryId);
    }
  }, [params.queryId]);

  function searchHandlerCaller(query) {
    searchGoogleHandler(query, setDataHandler, 1);
  }

  function submitHandler(e) {
    e.preventDefault();
    navigate(`/search/${input}`);
  }

  let btnClass = toShowButtons ? 'show-btn' : 'hide-btn';

  return (
    <form onSubmit={submitHandler}>
      <div className='search-box' style={{ maxWidth: mWidth }}>
        <span className='search-box__search-icon material-icons'>search</span>
        <input
          className='search-box__input-box'
          type='text'
          required
          value={input}
          onChange={(e) => {
            setInputHandler(e.target.value);
          }}
        />
        <button
          type='reset'
          className='search-box__clear-text'
          data-tooltip='Clear'
          onClick={() => {
            setInputHandler('');
          }}
        >
          X
        </button>
        <a href='#' className='search-box__link--mic-icon'>
          <div className='tooltip mic-tooltip' data-tooltip='Search by voice'></div>
          <svg
            className='search-box__mic-icon'
            focusable='false'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#4285f4'
              d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
            ></path>
            <path fill='#34a853' d='m11 18.08h2v3.92h-2z'></path>
            <path
              fill='#fbbc05'
              d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
            ></path>
            <path
              fill='#ea4335'
              d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
            ></path>
          </svg>
        </a>
        <a href='#' className='search-box__link--cam-icon'>
          <div className='tooltip image-tooltip' data-tooltip='Search by image'></div>
          <img
            className='search-box__cam-icon'
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlN0YW5kYXJkX3Byb2R1Y3RfaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE5MnB4IiBoZWlnaHQ9IjE5MnB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTkyIDE5MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxyZWN0IGlkPSJib3VuZGluZ19ib3hfMV8iIGZpbGw9Im5vbmUiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIi8+CjxnIGlkPSJhcnRfbGF5ZXIiPgoJPGNpcmNsZSBpZD0iRG90IiBmaWxsPSIjNDI4NUY0IiBjeD0iOTYiIGN5PSIxMDQuMTUiIHI9IjI4Ii8+Cgk8cGF0aCBpZD0iUmVkIiBmaWxsPSIjRUE0MzM1IiBkPSJNMTYwLDcydjQwLjE1VjEzNmMwLDEuNjktMC4zNCwzLjI5LTAuODIsNC44MnYwdjBjLTEuNTcsNC45Mi01LjQzLDguNzgtMTAuMzUsMTAuMzVoMHYwCgkJYy0xLjUzLDAuNDktMy4xMywwLjgyLTQuODIsMC44Mkg2NmwxNiwxNmg1MGgxMmM0LjQyLDAsOC42My0wLjksMTIuNDYtMi41MWMzLjgzLTEuNjIsNy4yOC0zLjk2LDEwLjE3LTYuODYKCQljMS40NS0xLjQ1LDIuNzYtMy4wMywzLjkxLTQuNzRjMi4zLTMuNCwzLjk2LTcuMjgsNC44MS0xMS40NGMwLjQzLTIuMDgsMC42NS00LjI0LDAuNjUtNi40NXYtMTJWOTYuMTVWODRsLTYtMTlsLTEwLjgyLDIuMTgKCQlDMTU5LjY2LDY4LjcxLDE2MCw3MC4zMSwxNjAsNzJ6Ii8+Cgk8cGF0aCBpZD0iQmx1ZSIgZmlsbD0iIzQyODVGNCIgZD0iTTMyLDcyYzAtMS42OSwwLjM0LTMuMjksMC44Mi00LjgyYzEuNTctNC45Miw1LjQzLTguNzgsMTAuMzUtMTAuMzVDNDQuNzEsNTYuMzQsNDYuMzEsNTYsNDgsNTYKCQloOTZjMS42OSwwLDMuMjksMC4zNCw0LjgyLDAuODJjMCwwLDAsMCwwLDBMMTQ5LDQ1bC0xNy01bC0xNi0xNmgtMTMuNDRIOTZoLTYuNTZINzZMNjAsNDBINDhjLTE3LjY3LDAtMzIsMTQuMzMtMzIsMzJ2MTJ2MjBsMTYsMTYKCQlWNzJ6Ii8+Cgk8cGF0aCBpZD0iR3JlZW4iIGZpbGw9IiMzNEE4NTMiIGQ9Ik0xNDQsNDBoLTEybDE2LjgzLDE2LjgzYzEuMjMsMC4zOSwyLjM5LDAuOTMsMy40NywxLjU5YzIuMTYsMS4zMiwzLjk3LDMuMTMsNS4yOSw1LjI5CgkJYzAuNjYsMS4wOCwxLjIsMi4yNCwxLjU5LDMuNDd2MEwxNzYsODRWNzJDMTc2LDU0LjMzLDE2MS42Nyw0MCwxNDQsNDB6Ii8+Cgk8cGF0aCBpZD0iWWVsbG93IiBmaWxsPSIjRkJCQzA0IiBkPSJNNDgsMTY4aDM5Ljg5bC0xNi0xNkg0OGMtOC44MiwwLTE2LTcuMTgtMTYtMTZ2LTIzLjg5bC0xNi0xNlYxMzZDMTYsMTUzLjY3LDMwLjMzLDE2OCw0OCwxNjh6CgkJIi8+CjwvZz4KPC9zdmc+Cg=='
            alt='Image search'
          />
        </a>
      </div>

      <div className={'search-buttons ' + btnClass}>
        <button className='btn google-search' type='submit'>
          Google Search
        </button>
        <a href='https://www.google.com/doodles' className='btn feeling-lucky'>
          I'm Feeling Lucky
        </a>
      </div>
    </form>
  );
};

export default Form;
