import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e2d27;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (max-width: 485px) {
    a {
      display: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
  }

  button {
    background-color: #78e08f;
    border: 2px solid #78e08f;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }

  button:hover {
    background-color: #b8e994;
  }
`;
