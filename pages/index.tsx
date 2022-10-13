import React, { useEffect } from "react";
import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "../styles/problemlist/problemLevel";
import axios from "axios";
import {
  GET_USER_INFO_URL,
  GET_SOLVED_PROBLEM_URL,
  GET_ALL_PROBLEM_URL,
} from "../constant/url";
import useStore from "../context/useStore";

const Home: NextPage = () => {



  interface problemDataType {
    id: number;
    writer_id: number;
    title: string;
    difficulty: number;
    content: string;
    sources: string;
    time_limit: number;
    memory_limit: number;
  }
  const {
    isLogin,
    setIsLogin,
    setHeaderLoginText,
  }: {
    isLogin: boolean;
    setIsLogin: any;
    setHeaderLoginText: any;
  } = useStore();
  const [myId, setMyId] = React.useState<number>(-1);
  const [problemData, setProblemData] = React.useState<problemDataType[]>([]);
  const [solvedProblems, setSolvedProblems] = React.useState<any>();

  const getUserInfo = () => {
    // 유저정보 불러오기
    let config = {
      method: "get",
      url: `${GET_USER_INFO_URL}`,
      headers: {},
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        console.log("로그인");
        setMyId(response.data.id);
        setIsLogin(true);
        localStorage.setItem("userName", response.data.nickname);
        console.log(isLogin);
      })
      .catch(function (error) {
        setIsLogin(false);
        console.log("비로그인");
      });
  };

  const getUserSolvedProblems = async () => {
    // 유저의 문제정보 불러오기
    let config = {
      method: "get",
      url: `${GET_SOLVED_PROBLEM_URL}`,
      headers: {},
      withCredentials: true,
    };

    await axios(config)
      .then(function (response) {
        console.log(response.data);
        setSolvedProblems(response.data.solvedProblem);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAllProblems = () => {
    // 전체 문제정보 불러오기
    let config = {
      method: "get",
      url: `${GET_ALL_PROBLEM_URL}`,
      headers: {},
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setProblemData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUserInfo();
    if (isLogin) {
      setHeaderLoginText("로그인상태임");
      getAllProblems();
      getUserSolvedProblems();
    } else {
      setHeaderLoginText("로그아웃상태임");
    }
    // eslint-disable-next-line
  }, [isLogin]);

  const getComplete = (solvedProblems: any, problemId: number): string => {
    if (solvedProblems != null) {
      for (let i = 0; i < solvedProblems?.length; i++) {
        if (solvedProblems[i].problem_id == problemId) {
          return "complete";
        }
      }
    }
    return "엄";
  };

  return (
    <S.Container>
      <S.UserInfoContainer></S.UserInfoContainer>
      <S.Title>문제목록</S.Title>
      <S.ProblemContainer>
        {problemData.map((data: problemDataType, idx: number) => {
          console.log(problemData);

          return (
            <ProblemLevel
              myId={myId}
              problemName={data.title}
              difficulty={data.difficulty}
              key={idx}
              problemNumber={data.id.toString()}
              complete={getComplete(solvedProblems, data.id)}
              author={data.writer_id}
            />
          );
        })}
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
