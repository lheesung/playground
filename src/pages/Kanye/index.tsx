import React, { useState } from "react";
import styled from "styled-components";
import { font } from "../../styles/font";
import axios from "axios";
import theme from "../../styles/theme";

interface Ye {
  quote?: string;
}

const Kanye = () => {
  const API = "https://api.kanye.rest";
  const [ye, setYe] = useState<Ye>({ quote: "" });

  const getKanye = async () => {
    const { data } = await axios.get(API);
    setYe(data);
  };

  return (
    <Container>
      <Title>칸예 띵언 뽑기~</Title>
      <Un>{ye.quote}</Un>
      <Button onClick={getKanye}>Go</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #595b5c;
  text-align: center;
`;

const Title = styled.h1`
  ${font.$D3};
  color: ${theme.white};
`;

const Un = styled.h1`
  ${font.$D2};
  color: gold;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  ${font.$Button1};
  &:hover {
    background-color: #619316;
    color: white;
  }
  transition: 0.1s ease-in;
`;

export default Kanye;
