import AxiosInstance from 'utils/Instance';

const REG_START = '/registration/start';
const CREATE_USER = () => `/registration/${localStorage.getItem('user_id')}`;

export const username = body => AxiosInstance.post(REG_START, body);
export const register = body => AxiosInstance.post(CREATE_USER(), body);
