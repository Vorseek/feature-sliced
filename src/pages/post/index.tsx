import React from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import styled from 'styled-components';
import Title from 'shared/ui/Title';

const ButtonWrap = styled.div`
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
`;

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
        data?.map((el: any) => (
          <React.Fragment key={el.id}>
            <span>{`EMAIL: ${el.email}`}</span>
            <p>{`BODY: ${el.body}`}</p>
          </React.Fragment>
        ))}
      <span>{`Страница: ${currentPage}`}</span>
    </>
  );
};

export default PostPage;
