import React, { useState } from 'react';
import { SearchResult } from './components/SearchResult';
import { Search } from './components/Search';

import { getQQInfo, IResponse } from './models';

import './index.scss';

const SearchPage = () => {
  const [info, setInfo] = useState<IResponse>({} as IResponse);
  const [isLoading, setLoading] = useState(false);

  //搜索回调
  const searchCb = async (qq: string) => {
    setLoading(true);
    const res = await getQQInfo(qq).finally(() => {
      setLoading(false);
    });
    setInfo(res.data);
  };

  const resultView = () => {
    if (isLoading) {
      return 'loading...';
    } else {
      if (info.qq) return <SearchResult info={info} />;
    }
    return null;
  };

  return (
    <div className="search-pages-container">
      <Search onConfirm={searchCb} errorInfo={info?.msg} />
      {resultView()}
    </div>
  );
};

export default SearchPage;
