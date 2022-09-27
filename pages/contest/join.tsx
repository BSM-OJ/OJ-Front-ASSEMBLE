import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import * as S from "../../styles/contest/style";

const ContestJoin: NextPage = () => {
  return (
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
  );
};

export default ContestJoin;
