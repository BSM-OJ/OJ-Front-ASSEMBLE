import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/contest/style";
import Head from "next/head";

const ContestList: NextPage = () => {
  const contestData = new Array(15).fill([
    "부산소마고 교내 알고리즘 경진대회",
    "2022.08.13   12:48 ~ 2022.08.14   12:48",
  ]);

  return (
    <>
      {contestData.map((data, idx) => {
        return (
          <>
            <Head>
              {/** 웹 외부요소 선언부 */}
              <title>대회 목록</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta content="text/html; charset=utf-8" />
              <meta property="og:title" content={`대회 목록`} key="title" />
            </Head>
            <S.contest_container key={idx}>
              <div>{data[0]}</div>
              <div>{data[1]}</div>
            </S.contest_container>
          </>
        );
      })}
    </>
  );
};

export default ContestList;
