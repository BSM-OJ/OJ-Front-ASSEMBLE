import React, { useEffect } from "react";
import type { NextPage } from "next";
import * as S from "../../styles/index-style";
import ProblemLevel from "../../styles/problemlist/problemLevel";
import axios, { Axios } from "axios";
import {
  GET_USER_INFO_URL,
  GET_SOLVED_PROBLEM_URL,
  GET_ALL_PROBLEM_URL,
} from "../../constant/url";
import useStore from "../../context/useStore";

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

  const getUserSolvedProblems = () => {
    // 유저의 문제정보 불러오기
    let config = {
      method: "get",
      url: `${GET_SOLVED_PROBLEM_URL}`,
      headers: {},
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data);
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
    getAllProblems();
    getUserSolvedProblems();
  }, []);

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

  React.useEffect(() => {
    solvedProblems?.map((data: any, idx: number) => {
      let config = {
        method: "get",
        url: `http://localhost:3000/api/problem/${data.problem_id}`,
        headers: {},
        withCredentials: true,
      };
      axios(config).then((response: any) => {
        setPrData((prev: any) => {
          if (prev != null) {
            return [...prev, response.data];
          } else {
            return [response.data];
          }
        });
      });
    });
  }, [solvedProblems]);

  const [prData, setPrData] = React.useState<any[]>();
  return (
    <S.Container>
      <S.Title>문제목록</S.Title>
      <S.ProblemContainer>
        {prData?.map((pData: any, idx: number) => {
          return (
            <ProblemLevel
              myId={myId}
              problemName={pData.title}
              difficulty={pData.difficulty}
              key={idx}
              problemNumber={pData.id.toString()}
              complete={getComplete(solvedProblems, pData.id)}
              author={pData.writer_id}
            />
          );
        })}
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
