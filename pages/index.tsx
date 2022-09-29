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
    content: string;
    id: number;
    memory_limit: number;
    sources: string;
    time_limit: number;
    title: string;
    writer_id: number;
  }
  const {
    isLogin,
    setIsLogin,
    setHeaderLoginText,
  }: { isLogin: boolean; setIsLogin: any; setHeaderLoginText: any } =
    useStore();
  const [problemData, setProblemData] = React.useState<problemDataType[]>([]);
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
        setIsLogin(true);
        console.log(isLogin);
      })
      .catch(function (error) {
        setIsLogin(false);
        console.log("비로그인");
      });
  };

  const getUserSolvedProblems = () => {
    // 유저 문제정보 불러오기
    let config = {
      method: "get",
      url: `${GET_SOLVED_PROBLEM_URL}`,
      headers: {},
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
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
      getAllProblems();
      setHeaderLoginText("로그아웃하실래요");
    } else {
      setHeaderLoginText("로그인하실랜드");
    }
    // eslint-disable-next-line
  }, [isLogin]); // 넣을필요 없는데 왜넣으라고해 ㅋ

  return (
    <S.Container>
      <S.Title>문제목록</S.Title>
      <S.ProblemContainer>
        {problemData.map((data: problemDataType, idx: number) => {
          return (
            <ProblemLevel
              problemName={data.title}
              key={idx}
              level={data.id.toString()}
              complete={"complete"}
            />
          );
        })}
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
