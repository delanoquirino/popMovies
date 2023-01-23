import { useState } from "react";
import { Link } from "react-router-dom";
import { Binoculars, Popcorn } from "phosphor-react";

import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Navbar>
      <h2>
        <Link to="/">
          <Popcorn size={28} color="#78e08f" weight="thin" />
          PopMovies
        </Link>
      </h2>
      <S.Form>
        <input type="text" placeholder="Pesquisar um filme" />
        <button type="submit">
          <Binoculars size={28} color="#181611" />
        </button>
      </S.Form>
    </S.Navbar>
  );
};
