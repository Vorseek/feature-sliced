import { useStore } from 'effector-react';
import React from 'react';
import { $input, getInputText } from 'entities/post/model';

interface P {
  email: string;
  body: string;
}

const PostCard: React.FC<P> = ({ email, body }) => {
  const input = useStore($input);

  return (
    <>
      <span>{`EMAIL: ${email}`}</span>
      <p>{`BODY: ${body}`}</p>
      <input
        type='text'
        value={input?.[email]}
        onChange={(e) => getInputText({ email, msg: e.target.value })}
      />
      <p>{input?.[email]}</p>
    </>
  );
};

export default PostCard;
