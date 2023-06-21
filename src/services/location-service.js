import AxiosInstance from 'utils/Instance';

const LOCATION_URL = '/registration/locations';

export const getLocations = params => AxiosInstance.get(LOCATION_URL, params);
