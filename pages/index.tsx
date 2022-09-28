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

const Home: NextPage = () => {
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
      })
      .catch(function (error) {
        console.log(error);
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

  const getAllSolvedProblems = () => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUserInfo();
    
  }, []);

  return (
    <S.Container>
      <S.Title>문제목록</S.Title>
      <S.ProblemContainer>
        <ProblemLevel
          problemName={"안녕하십니까"}
          key={"1"}
          level={"1"}
          star={"star"}
          complete={"complete"}
        />
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
