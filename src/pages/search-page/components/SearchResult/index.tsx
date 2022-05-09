import React from 'react';

export interface IResInfo {
  name: string;
  qlogo: string;
  qq: string;
}

interface IProps {
  info: IResInfo;
}

export const SearchResult = ({ info }: IProps) => {
  return (
    <div className="search-result-wrapper">
      <img className="result-avatar" alt="Avatar" src={info?.qlogo} />
      <div className="result-info-wrapper">
        <p className="info-title">{info?.name}</p>
        <p className="info-desc">{info?.qq}</p>
      </div>
    </div>
  );
};
