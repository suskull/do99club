import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/atoms/Button';
import { useGetPosts } from 'hooks/posts';
import { Spin } from 'components/atoms';
import { IPost } from 'types/common';

export default function Posts() {
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useGetPosts();

  return (
    <Spin spinning={isLoading || isFetching}>
      <div>
        <h1>Posts</h1>
        <Button>Click me</Button>
        {data?.map((post: IPost) => (
          <article
            style={{
              textDecoration: post.completed ? 'line-through' : '',
            }}
            className="post-excerpt"
            key={post.id}
          >
            <h3>{post.title}</h3>
          </article>
        ))}
        <p>{t('common.helloWorld')}</p>
      </div>
    </Spin>
  );
}
