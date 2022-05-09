import axios from 'axios';
import { IResInfo } from '../components/SearchResult';

export type IResponse = IResInfo & {
  code: number;
  msg?: string;
};
const baseUrl = 'https://api.uomg.com';

export const getQQInfo = async (qq: string) => {
  return axios.get<IResponse>(`${baseUrl}/api/qq.info`, {
    params: {
      qq,
    },
  });
};
