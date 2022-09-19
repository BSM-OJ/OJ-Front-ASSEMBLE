import styled from "styled-components";
import theme from "./theme";

export const Title = styled.h3`
  color: white;
  font-size: 3.4vh;
  font-weight: 400;
`;

export const Level = styled.div`
  width: 4vw;
  height: 3.2vh;

  color: white;
  font-size: 2vh;
  text-align: center;
  border-radius: 3.2vh;
  line-height: 3.2vh;
`;

export const Container = styled.div`
  width: 70vw;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Problem = styled.div`
  width: 20vw;
  padding: 16px;
  box-sizing: border-box;
  height: 13vh;
  background-color: #333333;
  border: 2px solid white;
  border-radius: 2vh;
`;

export const CompleteButton = styled.div`
  width: 4vw;
  height: 3vh;
  background-color: #7494ab;
  border-radius: 8px;
  line-height: 3vh;
  text-align: center;
  font-size: 2vh;
  color: white;
`;

export const Content = styled.span`
  color: white;
  font-size: 2.4vh;
  font-weight: 300;
`;
