import styled from "styled-components";
import theme from "./theme";
import { color } from "./color";

export const Title = styled.h3`
  color: ${color.main};
  font-size: 30px;
  font-weight: 400;
`;

export const ProblemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Level = styled.div`
  width: 50px;
  height: 25px;
  color: ${color.main};
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LevelText = styled.div``;

export const Container = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Problem = styled.div`
  min-width: 190px;
  min-height: 90px;

  margin: 10px;
  padding: 16px;
  box-sizing: border-box;
  height: 13vh;
  background-color: ${color.background};
  border: 2px solid white;
  border-radius: 20px;
`;

export const CompleteButton = styled.div`
  width: 3vw;
  min-width: 40px;
  min-height: 20px;
  background-color: ${color.grey};
  color: ${color.main};
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.span`
  color: ${color.main};
  font-size: 16px;
  font-weight: 300;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
`;
