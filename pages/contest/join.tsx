import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import * as S from "../../styles/contest/style";
import Head from "next/head";

const ContestJoin: NextPage = () => {
  return (
    <>
      <Head>
        <title>대회 참가</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="text/html; charset=utf-8" />
        <meta property="og:title" content={`대회 참가`} key="title" />
      </Head>
      <main
        style={{
          display: "flex",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <S.join_container>
          <S.title_container>
            <Image
              src="/../public/img/logo_large.png"
              alt="dd"
              width="50"
              height="1000"
            />
            <S.title_container_text>BSMOJ</S.title_container_text>
          </S.title_container>
          <S.join_input type="text" placeholder={"참여코드를 입력해주세요"} />
          <S.join_button>참여하기</S.join_button>
        </S.join_container>
      </main>
    </>
  );
};

export default ContestJoin;
