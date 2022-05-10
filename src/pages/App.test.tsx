import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/> Component', () => {
  it('should render the UI successfully', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('QQ号查询');
    expect(screen.getByPlaceholderText('请输入您的qq号')).toBeInTheDocument();
  });
});
