import React from 'react';
import styled from 'styled-components';

interface P {
  title: string;
}

const TitlePage = styled.h1`
  color: red;
  margin-bottom: 40px;
`;

const Title: React.FC<P> = ({ title }) => <TitlePage>{title}</TitlePage>;

export default Title;
