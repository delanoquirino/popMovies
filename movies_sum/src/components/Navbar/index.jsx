import { Link } from "react-router-dom";
import { MagnifyingGlass, Popcorn } from "phosphor-react";
export const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">
          <Popcorn size={28} color="#78e08f" weight="thin" />
          PopMovies
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Pesquisar um filme" />
        <button type="submit">
          <MagnifyingGlass size={38} color="#181611" weight="thin" />
        </button>
      </form>
    </nav>
  );
};
