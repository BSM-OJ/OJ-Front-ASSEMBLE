import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/register/style";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {
  GET_PROBLEM_INFO_URL,
  UPLOAD_PROBLEM_EXAMPLESET_URL,
} from "../../constant/url";
import axios from "axios";

const UploadTestcase: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분

  const [input, setInput] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [testcaseLength, setTestcaseLength] = React.useState<string>("");
  type dynamic_routing = string | string[] | undefined; // pid 기본 타입, 처음에 로딩 안될때는 undefined라서 어쩔수없

  const setTestcase = async (ProblemId: dynamic_routing) => {
    let data = {
      problemId: ProblemId, // 문제 번호
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
        alert("등록이 완료되었습니다.");
      })
      .catch(function (error) {});
  };

  React.useEffect(() => {
    if (route.id != null) {
      let config = {
        method: "get",
        url: `${GET_PROBLEM_INFO_URL}/${route.id}`,
        headers: {},
        withCredentials: true,
      };

      axios(config)
        .then(function (response) {
          setTestcaseLength(response.data.problem_examples.length);
          setTitle(response.data.title);
          console.log(response.data.problem_examples);
        })
        .catch(function (error) {
          alert("권한이 없습니다.");
        });
    }
  }, [route.id]);

  return (
    <main>
      <S.MainText>
        {route.id} - {title && title}
      </S.MainText>
      <S.MainText>
        현재 총 {testcaseLength}개의 테스트케이스가 등록되어 있습니다.
      </S.MainText>
      <S.RegisterTestcase
        name="input"
        placeholder="문제의 예제 입력을 입력해주세요."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <S.RegisterTestcase
        name="output"
        placeholder="문제의 예제 출력을 입력해주세요."
        onChange={(e) => {
          setOutput(e.target.value);
        }}
      />
      <p style={{ textAlign: "center", color: "white" }}>
        예제 등록은 한번에 최대 1개까지 가능합니다.
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        현재까지 등록된 예제는 F12 - Console 에서 확인 가능합니다.
      </p>
      <S.RegisterButton
        onClick={() => {
          setTestcase(route.id);
        }}
      >
        등록하기
      </S.RegisterButton>
    </main>
  );
};

export default UploadTestcase;
