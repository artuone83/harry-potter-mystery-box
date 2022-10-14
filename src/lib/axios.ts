import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://rebrickable.com/api/v3/lego',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'key 92d40dc071cf40e267542820ce63d122',
  },
});
