import type { NextPage } from "next";
import axios from "axios";
import {
  UPLOAD_PROBLEM_URL,
  UPLOAD_PROBLEM_EXAMPLESET_URL,
} from "../../constant/url";
import * as S from "../../styles/register/style";
import React from "react";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";

const Register: NextPage = () => {
  const submit = async () => {
    let data = {
      title: title,
      content: content,
      sources: sources,
      difficulty: difficulty,
      time_limit: timeLimit,
      memory_limit: memoryLimit,
    };
    let config = {
      method: "post",
      url: UPLOAD_PROBLEM_URL,
      headers: {},
      data: data,
      withCredentials: true,
    };

    await axios(config)
      .then(function (response) {
        alert(
          `등록이 완료되었습니다. 문제의 번호는 ${response.data.ProblemId}번 입니다 \n`
        );
        setTestcase(response.data.ProblemId.toString());
      })
      .catch(function (error) {
        console.log(error);

        alert("등록에 실패하였습니다.");
      });
  };

  const setTestcase = async (ProblemId: string) => {
    let data = {
      problemId: ProblemId,
      exampleInput: input,
      exampleOutput: output,
    };
    let config = {
      method: "post",
      url: UPLOAD_PROBLEM_EXAMPLESET_URL,
      headers: {},
      data: data,
      withCredentials: true,
    };

    await axios(config)
      .then(function (response) {
        console.log("어엄");
      })
      .catch(function (error) {
        console.log(error);
        console.log(input);
        console.log(output);
        console.log(ProblemId);
      });
  };

  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [sources, setSources] = React.useState<string>("");
  const [difficulty, setDifficulty] = React.useState<string>("");

  const [timeLimit, setTimeLimit] = React.useState<string>("");
  const [memoryLimit, setMemoryLimit] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");

  return (
    <>
      <Head>
        {/** 웹 외부요소 선언부 */}
        <title>문제 등록</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="text/html; charset=utf-8" />
        <meta property="og:title" key="title" />
      </Head>
      <S.FormContainer>
        <S.MainText>문제 등록</S.MainText>
        <S.RegisterInput
          type="text"
          name="title"
          placeholder="문제의 제목을 입력해주세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <S.RegisterInput
          type="text"
          name="difficulty"
          placeholder="문제의 난이도를 입력해주세요. (1~5)"
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        />
        <S.RegisterTextarea
          name="content"
          placeholder="문제의 내용을 입력해주세요."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <S.RegisterInput
          type="text"
          name="sources"
          placeholder="문제의 출처를 입력해주세요."
          onChange={(e) => {
            setSources(e.target.value);
          }}
        />
        <S.RegisterInput
          type="text"
          name="timeLimit"
          placeholder="문제의 시간 제한을 입력해주세요. (ms단위)"
          onChange={(e) => {
            setTimeLimit(e.target.value);
          }}
        />
        <S.RegisterInput
          type="text"
          name="memoryLimit"
          placeholder="문제의 메모리 제한을 입력해주세요. (MB단위)"
          onChange={(e) => {
            setMemoryLimit(e.target.value);
          }}
        />
        <S.RegisterTestcase
          name="input"
          placeholder="문제의 테스트케이스 입력을 입력해주세요."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <S.RegisterTestcase
          name="output"
          placeholder="문제의 테스트케이스 출력을 입력해주세요."
          onChange={(e) => {
            setOutput(e.target.value);
          }}
        />
        <p style={{ textAlign: "center", color: "white" }}>
          해당 페이지에서 예제 등록은 1개까지 가능하며,
        </p>
        <p style={{ textAlign: "center", color: "white" }}>
          문제 설정에서 다른 예제를 추가할 수 있습니다.
        </p>
        <S.RegisterButton onClick={submit}>등록하기</S.RegisterButton>
      </S.FormContainer>
    </>
  );
};

export default Register;
