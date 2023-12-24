import { createContext, useState } from 'react';

const SearchContext = createContext({
  input: '',
  setInputHandler: () => {},
  data: {},
  setDataHandler: () => {},
  setNextDataHandler: () => {},
});

export default SearchContext;

export const SearchContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState('');

  function setNextDataHandler(newdata) {
    setData({
      items: [...data.items, ...newdata.items],
      searchInformation: { ...data.searchInformation },
      start: data.start + 10,
    });
  }

  const contextValue = {
    input: input,
    setInputHandler: setInput,
    data: data,
    setDataHandler: setData,
    setNextDataHandler: setNextDataHandler,
  };

  return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
};
