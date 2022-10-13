import type { NextPage } from "next";
import * as S from "./style";
//@ts-ignore
import { HiLockOpen } from "react-icons/hi";
//@ts-ignore
import { HiLockClosed } from "react-icons/hi";
//@ts-ignore
import { BsPlusLg } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import {
  POST_CREATE_CONTEST,
  POST_CREATE_CONTEST_PROBLEM,
} from "../../constant/url";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const ContestHold: NextPage = () => {
  const [isLock, setMenu] = useState(true); // 메뉴의 초기값을 false로 설정
  const [title, setTitle] = React.useState<string>("");
  const [startTime, setStartTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [contestProblemNumber, setContestProblemNumber] = React.useState<
    number[]
  >([]);
  const [nowNumber, setnowNumber] = React.useState<number>(-1);
  const router = useRouter();

  const togglebtn = () => {
    setMenu((isLock) => !isLock); // on,off 개념 boolean
  };

  const submit = async () => {
    if (startTime > endTime) {
      alert("시간 설정이 잘못되었습니다.");
      return;
    }
    const data = {
      name: title,
      start_date: startTime,
      end_date: endTime,
      password: password,
    };
    const config = {
      method: "post",
      url: POST_CREATE_CONTEST,
      headers: {},
      withCredentials: true,
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert(`대회에 추가된 문제를 등록하고 있습니다 잠시만 기다려주세요`);

        let promise = [];

        for (let i = 0; i < contestProblemNumber.length; i++) {
          promise.push(
            axios.post(POST_CREATE_CONTEST_PROBLEM, {
              problem_id: contestProblemNumber[i].toString(),
              contest_id: response.data[0].id,
            })
          );
        }

        Promise.all(promise)
          .then(() => {
            alert(`대회 생성이 완료되었습니다.`);
            router.push("/");
          })
          .catch(() => {
            alert("존재하지 않는 문제입니다.");
            router.reload();
          });
      })
      .catch(function (error) {
        alert("입력폼이 완성되지 않았습니다.");
      });
  };

  const submitProblem = () => {
    setContestProblemNumber((prev) => [...prev, nowNumber]);
    console.log(contestProblemNumber);
  };

  return (
    <>
      <S.ContestHold>
        <S.Tcon>
          <S.Title
            placeholder="이벤트 제목 입력"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
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
            <S.LRoom
              placeholder="1111"
              type="number"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          )}
        </S.Container>

        <S.Line />
        <S.MidCt>
          <S.Time
            type="number"
            placeholder="추가할 문제의 번호를 입력해주세요"
            onChange={(e) => {
              setnowNumber(parseInt(e.target.value));
            }}
          />
          <span onClick={submitProblem}>
            <BsPlusLg className="plus" />
          </span>
        </S.MidCt>
        {contestProblemNumber.map((data, idx) => {
          return (
            <h2 key={idx} style={{ color: "white" }}>
              {data}번 문제
            </h2>
          );
        })}
        <S.Line />
        <S.SubTitle>시간 설정</S.SubTitle>
        <S.TimeSet>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <S.Ttime>개최시간</S.Ttime>
            <S.Time
              type="datetime-local"
              onChange={(e) => {
                setStartTime(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <S.Ttime>마감시간</S.Ttime>
            <S.Time
              type="datetime-local"
              onChange={(e) => {
                setEndTime(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <S.Submit onClick={submit}>제출하기</S.Submit>
        </S.TimeSet>
      </S.ContestHold>
    </>
  );
};

export default ContestHold;
