import React, { ChangeEvent, useState } from 'react';
import __ from 'lodash';

interface IProps {
  onConfirm: (qNumber: string) => void;
  errorInfo?: string;
}

//qq正则
const Regex = /^[1-9][0-9]{4,14}/;

export const Search = ({ onConfirm, errorInfo }: IProps) => {
  const [errorMsg, setError] = useState(errorInfo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onConfirm(val);
    //qq号合法，调用接口
    if (Regex.test(val)) {
      onConfirm(val);
      setError('');
    } else {
      setError(!val ? '' : '请输入合法qq号');
    }
  };

  return (
    <div className="search-wrapper">
      <h2>QQ号查询</h2>
      <div>
        <label htmlFor="qq">QQ:</label>
        <input
          placeholder="请输入您的qq号"
          onChange={__.throttle(handleChange, 1000)}
        />
      </div>
      {errorMsg && <div className="error-info">{errorMsg || errorInfo}</div>}
    </div>
  );
};
