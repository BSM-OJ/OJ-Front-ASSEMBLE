import React from "react";
import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "./problemlist/problemLevel";
import router from "next/router";

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Title>문제목록</S.Title>
      <S.ProblemContainer>
        {new Array(9).fill(0).map((_, __) =>
          ["1", "2", "3", "4", "5"].map((data, idx) => {
            return (
              <ProblemLevel
                key={idx}
                level={data}
                star={"star"}
                complete={"complete"}
              />
            );
          })
        )}
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
