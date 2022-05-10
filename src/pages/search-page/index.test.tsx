import { render, screen, fireEvent } from '@testing-library/react';
import SearchPage from './index';
import * as Fetch from './models';

describe('Search Page', () => {
  it('should display the error msg when the qq number is invaild', () => {
    render(<SearchPage />);
    const inputNode = screen.getByPlaceholderText('请输入您的qq号');
    fireEvent.change(inputNode, { target: { value: 'a' } });
    expect(screen.getByText(/请输入合法qq号/)).toBeInTheDocument();
  });

  it('should send the request when the qq number is valid', () => {
    render(<SearchPage />);
    const spyFn = jest.spyOn(Fetch, 'getQQInfo');
    const inputNode = screen.getByPlaceholderText('请输入您的qq号');
    fireEvent.change(inputNode, { target: { value: '519248932' } });
    expect(screen.queryByText(/请输入合法qq号/)).toBeNull();
    expect(spyFn).toHaveBeenCalled();
  });
});
