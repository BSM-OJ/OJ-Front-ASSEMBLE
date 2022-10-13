import type { NextPage } from "next";
import * as S from "./style";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import React, { useEffect, useState } from "react";

const ContestHold: NextPage = () => {
  const [isLock, setMenu] = useState(true); // 메뉴의 초기값을 false로 설정

  const togglebtn = () => {
    setMenu((isLock) => !isLock); // on,off 개념 boolean
  };

  return (
    <>
      <S.ContestHold>
        <S.Tcon>
          <S.Title placeholder="이벤트 제목 입력" />
          <S.Submit>제출하기</S.Submit>
        </S.Tcon>
        <S.Container>
          {isLock ? (
            <HiLockOpen color="white" onClick={() => togglebtn()} />
          ) : (
            <HiLockClosed color="white" onClick={() => togglebtn()} />
          )}
          {isLock ? (
            <S.Room>공개방</S.Room>
          ) : (
            <S.LRoom placeholder="1111" type="number" />
          )}
        </S.Container>
        <S.Line />
        <S.MidCt>
          <S.SubTitle>문제 추가하기</S.SubTitle>
          <BsPlusLg className="plus" />
        </S.MidCt>
        <S.Line />
        <S.SubTitle>시간 설정</S.SubTitle>
        <S.TimeSet>
          <S.Ttime>개최시간</S.Ttime>
          <S.Time type="datetime-local" />
          &nbsp;&nbsp;&nbsp;
          <S.Ttime>마감시간</S.Ttime>
          <S.Time type="datetime-local" />
        </S.TimeSet>
      </S.ContestHold>
    </>
  );
};

export default ContestHold;
