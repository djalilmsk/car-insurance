import axios from 'axios';

const url = 'https://c352-41-111-178-9.ngrok-free.app/api';

export const customFetch = axios.create({
  baseURL: url,
});

export default customFetch;