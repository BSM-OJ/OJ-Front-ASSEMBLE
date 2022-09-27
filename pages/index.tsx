import React from "react";
import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "../styles/problemlist/problemLevel";
import router from "next/router";
import axios from "axios";
import { GET_USER_INFO_URL } from "../constant/url";

const Home: NextPage = () => {
  let config = {
    method: "get",
    url: `${GET_USER_INFO_URL}`,
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
