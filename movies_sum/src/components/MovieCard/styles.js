import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 430px;
  border-radius: 30px;
  margin: 0px auto;
  background-color: #1e2d27;
  padding: 15px 25px;
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 310px;
  margin: 0 auto;
  position: relative;
  img {
    width: 200px;
    height: 310px;
    border-radius: 18px;
    transition: all 0.5s ease-in-out;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  p {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 16px;
  }

  a {
    background-color: #78e08f;
    border: 2px solid #78e08f;
    border-radius: 4px;
    color: #000;
    padding: 0.5rem 1rem;
    transition: 0.4s ease-in-out;
    text-align: center;
    font-weight: bold;
    a:hover {
      color: #78e08f;
    }
  }
`;
