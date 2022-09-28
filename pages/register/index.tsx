import type { NextPage } from "next";
import axios from "axios";
import { UPLOAD_PROBLEM_URL } from "../../constant/url";
import * as S from "../../styles/register/style";
import React from "react";
import Image from "next/image";

import { NextRouter, useRouter } from "next/router";

const Register: NextPage = () => {
  const router: NextRouter = useRouter();

  const submit = () => {
    let data = {
      title: title,
      content: content,
      sources: sources,
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

    axios(config)
      .then(function (response) {
        alert(
          `등록이 완료되었습니다. 문제의 번호는 ${response.data.ProblemId}번 입니다`
        );
      })
      .catch(function (error) {
        alert("등록에 실패하였습니다.");
      });
  };

  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [sources, setSources] = React.useState<string>("");
  const [timeLimit, setTimeLimit] = React.useState<string>("");
  const [memoryLimit, setMemoryLimit] = React.useState<string>("");

  return (
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
        placeholder="문제의 시간 제한을 입력해주세요. (초단위)"
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

      <S.RegisterButton onClick={submit}>등록하기</S.RegisterButton>
    </S.FormContainer>
  );
};

export default Register;
