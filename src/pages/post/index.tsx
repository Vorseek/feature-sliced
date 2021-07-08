import React from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import styled from 'styled-components';
import Title from 'shared/ui/Title';
import PostCard from 'entities/post/ui/PostCard';
import { Link } from 'react-router-dom';

const ButtonWrap = styled.div`
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
`;
// TODO: Убрать логику из page
const PostPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { isLoading, data } = useQuery(['jsonplaceholder', currentPage], () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentPage}/comments`).then((res) =>
      res.json()
    )
  );

  return (
    <>
      <Title title="Страница с постами, тест react query" />
      <Link to="/charter">К персонажам</Link>
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
