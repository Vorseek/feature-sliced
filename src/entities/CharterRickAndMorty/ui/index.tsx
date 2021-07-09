import { useStore } from 'effector-react';
import ButtonCharter from 'features/GetCharterRickAndMorty';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { $rickCharter } from '../model';

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CharterComponent = () => {
  const charters = useStore($rickCharter);

  return (
    <>
      <h1>TODO</h1>
      <Link to="/">На главную</Link>
      <CardWrap>
        {charters?.results?.map((charter: any) => (
          <React.Fragment key={charter.id}>
            <img src={charter.image} alt={charter.name} />
            <h4>{charter.name}</h4>
          </React.Fragment>
        ))}
      </CardWrap>
      <ButtonCharter />
    </>
  );
};

export default CharterComponent;
