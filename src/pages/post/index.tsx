import React from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import styled from 'styled-components';
import Title from 'shared/ui/Title';
import PostCard from 'entities/post/ui/PostCard';
import { Link } from 'react-router-dom';
import { getJSONPlaceholderPost } from 'shared/api/services/RickAndMorty';

// TODO: Убрать логику из page
const PostPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { isLoading, data } = useQuery(['jsonplaceholder', currentPage], () =>
    getJSONPlaceholderPost(currentPage).then((res) => res.data)
  );

  return (
    <>
      <Title title="Страница с постами, тест react query" />
      <LinkBlock>
        <Link to="/charter">К персонажам</Link>
        <Link to="/graphql">GraphQL</Link>
      </LinkBlock>
      <ButtonWrap>
        <Button
          type="ghost"
          onClick={() => {
            setCurrentPage((prev) => prev - 1 || 1);
          }}>
          -
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setCurrentPage((prev) => prev + 1 || 1);
          }}>
          +
        </Button>
      </ButtonWrap>

      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        data?.map((post: { id: number; email: string; body: string }) => (
          <PostCard key={post.id} email={post.email} body={post.body} />
        ))}
      <span>{`Страница: ${currentPage}`}</span>
    </>
  );
};

export default PostPage;

const ButtonWrap = styled.div`
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
`;

const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
