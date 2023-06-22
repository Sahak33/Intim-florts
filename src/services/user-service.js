import AxiosInstance from 'utils/Instance';

const REG_START = '/registration/start';
const CREATE_USER = id => `/registration/${id}`;

export const username = body => AxiosInstance.post(REG_START, body);
export const register = (id, body) => AxiosInstance.post(CREATE_USER(id), body);
