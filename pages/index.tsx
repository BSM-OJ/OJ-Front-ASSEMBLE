import React from "react";
import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "./problemlist/problemLevel";
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
        {new Array(9).fill(0).map((_, __) =>
          ["1", "2", "3", "4", "5"].map((data, idx) => {
            return (
              <ProblemLevel
                key={idx}
                level={data}
                star={"star"}
                complete={"complete"}
              />
            );
          })
        )}
      </S.ProblemContainer>
    </S.Container>
  );
};

export default Home;
