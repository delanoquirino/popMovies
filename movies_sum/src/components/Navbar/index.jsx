import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Binoculars, Popcorn } from "phosphor-react";

import * as S from "./styles";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <S.Navbar>
      <h2>
        <Link to="/">
          <Popcorn size={28} color="#78e08f" weight="thin" />
          PopMovies
        </Link>
      </h2>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <Binoculars size={28} color="#181611" />
        </button>
      </S.Form>
    </S.Navbar>
  );
};
