import React from "react";

import * as S from "./styled";

const RightNav = ({ open }) => {
  return (
    <S.Container open={open}>
      <S.Links to="/" >
        Home
      </S.Links>
      <S.Links to="/atividades">
        Atividades
      </S.Links>
    </S.Container>
  );
};

export default RightNav;
