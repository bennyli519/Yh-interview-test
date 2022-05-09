import React from 'react';
import { SearchResult } from './components/SearchResult';
import { Search } from './components/Search';

import './index.scss';

const SearchPage = () => {
  const searchCb = (val: string) => {
    console.log('callback', val);
  };

  return (
    <div className="search-pages-container">
      <Search onConfirm={searchCb} />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
