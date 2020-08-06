import React from "react";
import Burger from "./Burger";

import * as S from "./styled";

const Navbar = () => {
  return (
    <>
      <S.TopbarWrapper>
        <Burger />
        <S.TopbarLogo>AVA Teste</S.TopbarLogo>
      </S.TopbarWrapper>
    </>
  );
};

export default Navbar;
