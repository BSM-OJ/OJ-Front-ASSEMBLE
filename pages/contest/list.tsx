import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/contest/style";
import Head from "next/head";
import StartingContentList from "./starting";
import EndedContentList from "./ended";

const ContestList: NextPage = () => {
  return (
    <>
      <Head>
        {/** 웹 외부요소 선언부 */}
        <title>대회 목록</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="text/html; charset=utf-8" />
        <meta property="og:title" content={`대회 목록`} key="title" />
      </Head>
      <StartingContentList />
      <EndedContentList />
    </>
  );
};

export default ContestList;
