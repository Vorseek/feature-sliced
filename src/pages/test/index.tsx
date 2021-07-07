import React from "react";
import { useQuery } from "react-query";
import { Button, DatePicker } from "antd";

const TestPage: React.FC = () => {
  const { isLoading, data } = useQuery("jsonplaceholder", () =>
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json()
    )
  );

  return (
    <>
      <div>
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
      </div>
      {isLoading && <h1>Loading...</h1>}
      {data?.map((el: { id: string; email: string; body: string }) => (
        <React.Fragment key={el.id}>
          <span>{`EMAIL: ${el.email}`}</span>
          <p>{`BODY: ${el.body}`}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default TestPage;
