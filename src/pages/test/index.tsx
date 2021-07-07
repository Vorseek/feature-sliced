import React from 'react';
import { useQuery } from 'react-query';
import { Button, DatePicker } from 'antd';

const TestPage = () => {
  const [state, setstate] = React.useState(1);

  const { isLoading, data } = useQuery(['jsonplaceholder', state], () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${state}/comments`).then((res) => res.json())
  );

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setstate((prev) => prev + 1);
        }}>
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setstate((prev) => prev - 1);
        }}>
        -
      </button>
      <div>
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
      </div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        data?.map((el: any) => (
          <React.Fragment key={el.id}>
            <span>{`EMAIL: ${el.email}`}</span>
            <p>{`BODY: ${el.body}`}</p>
          </React.Fragment>
        ))}
    </>
  );
};

export default TestPage;
