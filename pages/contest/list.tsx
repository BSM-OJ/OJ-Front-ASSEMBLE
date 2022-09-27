import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/contest/style";

const ContestList: NextPage = () => {
  const contestData = new Array(15).fill([
    "부산소마고 교내 알고리즘 경진대회",
    "2022-09-01",
  ]);

  return (
    <>
      {contestData.map((data, idx) => {
        return (
          <S.contest_container key={idx}>
            <div>{data[0]}</div>
            <div>{data[1]}</div>
            <S.contest_join_button
              onClick={() => {
                console.log("암");
              }}
            >
              참가하기
            </S.contest_join_button>
          </S.contest_container>
        );
      })}
    </>
  );
};

export default ContestList;
