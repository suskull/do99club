import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'api/posts';

export const RQ_GET_POSTS = 'rc-query/GET_POSTS';

export function useGetPosts() {
  return useQuery([RQ_GET_POSTS], async () => getPosts());
}
