import React, { ChangeEvent } from 'react';

interface IProps {
  onConfirm: (qNumber: string) => void;
}

export const Search = ({ onConfirm }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const val = e.target.value;
    onConfirm(val);
  };

  return (
    <div className="search-wrapper">
      <h2>QQ号查询</h2>
      <div>
        <label htmlFor="qq">QQ:</label>
        <input placeholder="请输入您的qq号" onChange={handleChange} />
      </div>
    </div>
  );
};
