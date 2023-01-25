import styled from "styled-components";

export const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 2rem auto;
`;
export const FilmImage = styled.div`
  margin: 0 auto;

  div {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 700px) {
    div {
      width: 200px;
    }
  }
`;

export const TagLine = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
export const Info = styled.div`
  margin-bottom: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const InfoDescription = styled.div`
  p {
    line-height: 1.4rem;
  }
`;
