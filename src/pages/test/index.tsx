import React from "react";
import { useQuery } from "react-query";
import { Button, DatePicker } from "antd";

const TestPage = () => {
  const { isLoading, data } = useQuery("jsonplaceholder", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
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
      {data?.map((el: any) => (
        <React.Fragment key={el.id}>
          <span>{`TITLE: ${el.title}`}</span>
          <p>{`BODY: ${el.body}`}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default TestPage;
