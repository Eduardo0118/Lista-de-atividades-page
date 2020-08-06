import React from "react";

import * as S from './styled'

const Home = () => {
  return (
    <S.HomeWrapper>
      <S.HomeTitle>BEM-VINDO</S.HomeTitle>
      <S.HomeDescription>Clique no botão para visualizar as Atividades!</S.HomeDescription>
      <S.HomeButton to="/atividades">Visualizar</S.HomeButton>
    </S.HomeWrapper>
  );
};

export default Home;
