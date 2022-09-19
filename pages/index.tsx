import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "./problemlist/problemLevel";
//npm install react-icons --save
//yarn add react-icons

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Title>문제목록</S.Title>
      {["1", "2", "3", "4", "5"].map((data, idx) => {
        return (
          <ProblemLevel
            key={idx}
            level={data}
            star={"star"}
            complete={"complete"}
          />
        );
      })}
      {["1", "2", "3", "4", "5"].map((data, idx) => {
        return (
          <ProblemLevel key={idx} level={data} star={"star"} complete={""} />
        );
      })}
    </S.Container>
  );
};

export default Home;
