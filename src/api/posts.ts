import { sendGet } from 'utils/axios';

export const getPosts = () => sendGet('/todos', {});
