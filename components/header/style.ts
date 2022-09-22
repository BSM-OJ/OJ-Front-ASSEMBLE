import styled from "styled-components";

export const Toggle_Span = styled.span`
color: #eee;`;

export const Toggle_Btn = styled.a`
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    content: "";
    background-color: #333;
    width: 84px;
    height: 84px;
    margin: -45px 0 0 -45px;
    border-radius: 50%;
    border: 4px solid transparent;
    transition: all 0.75s;
  }
  & ${Toggle_Span}:nth-of-type(1) {
    -webkit-transform: translateY(20px) rotate(-45deg);
    transform: translateY(20px) rotate(-45deg);
  }
  & ${Toggle_Span}:nth-of-type(2) {
    left: 60%;
    opacity: 0;
    -webkit-animation: active-menu-bar12-01 0.8s forwards;
    animation: active-menu-bar12-01 0.8s forwards;
  }
  & ${Toggle_Span}:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-20px) rotate(45deg);
  }
  @-webkit-keyframes active-menu-bar12-01 {
    100% {
      height: 0;
    }
  }
  @keyframes active-menu-bar12-01 {
    100% {
      height: 0;
    }
  }

  &:after {
    -webkit-animation: circle-12 0.4s 0.25s forwards;
    animation: circle-12 0.4s 0.25s forwards;
  }
  @-webkit-keyframes circle-12 {
    0% {
      border-color: transparent;
      -webkit-transform: rotate(0deg);
    }
    25% {
      border-color: transparent #fff transparent transparent;
    }
    50% {
      border-color: transparent #fff #fff transparent;
    }
    75% {
      border-color: transparent #fff #fff #fff;
    }
    100% {
      border-color: #fff;
      -webkit-transform: rotate(-680deg);
    }
  }
  @keyframes circle-12 {
    0% {
      border-color: transparent;
      transform: rotate (0deg);
    }
    25% {
      border-color: transparent #fff transparent transparent;
    }
    50% {
      border-color: transparent #fff #fff transparent;
    }
    75% {
      border-color: transparent #fff #fff #fff;
    }
    100% {
      border-color: #fff;
      transform: rotate (-680deg);
    }
  }
`;

export const Search = styled.input`
  height: 30px;
  border: 1px solid white;
  background-color: #414143;
  width: 40%;
  border-radius: 15px;
  background-image: url(/images/search.png);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 97%;
  background-position-y: 5px;
  &:focus {
    outline: none;
  }
`;

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #2a2a2c;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    ${Search} {
      width: 50%;
    }
  }
`;

export const Logo = styled.img`
  height: 28px;
`;

export const Nav_item = styled.a``;
export const Nav = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    ${Nav_item} {
      padding: 5px;
    }
  }
`;
