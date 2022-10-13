import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 3.5rem;
  align-items: center;
  background-color: #2a2a2c;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 12rem;
  }
`;

export const Logo = styled.img`
  height: 31px;
`;

export const Search = styled.input`
  height: 20px;
  border: 1px solid white;
  background-color: #414143;
  width: 40%;
  border-radius: 17px;
  background-image: url(/images/search.png);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 97%;
  background-position-y: 5px;
  padding: 17px;
  box-sizing: border-box;
  color: white;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    height: 5rem;
  }
`;
