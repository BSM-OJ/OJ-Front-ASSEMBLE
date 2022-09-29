import React, { Dispatch, SetStateAction } from "react";
import Code from "./Code";
import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import * as S from "../../styles/problem/style";
import axios from "axios";
import { Resizable } from "re-resizable";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import useStore from "../../context/useStore";
import styles from "../../styles/Home.module.scss";
import {
  GET_PROBLEM_INFO_URL,
  POST_CODE_TEST_URL,
  POST_CODE_SUBMIT_URL,
} from "../../constant/url";
import { CopyToClipboard } from "react-copy-to-clipboard";

// 에디터 기본 디자인
const Problem_default_style: object = {
  alignItems: "center",
  justifyContent: "center",
  background: "#333",
  color: "#fff",
} as const;

type Pid = string | string[] | undefined; // pid 기본 타입, 처음에 로딩 안될때는 undefined라서 어쩔수없

interface problemsExampleType {
  example_input: string;
  example_output: string;
}

interface zustandType {
  nowCode: string;
  setNowCode: any;
  langIdx: number;
  setNowlangIdx: any;
  nowProblemNumber: string;
  setNowProblemNumber: any;
}

const Problem: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분

  const {
    nowCode,
    setNowCode,
    langIdx,
    setNowlangIdx,
    nowProblemNumber,
    setNowProblemNumber,
  }: zustandType = useStore();

  const pid: Pid = route.problem; // 문제 번호

  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [sources, setSources] = React.useState<string>("BSM-OJ");
  const [timeLimit, setTimeLimit] = React.useState<string>("");
  const [memoryLimit, setMemoryLimit] = React.useState<string>("");
  const [problemsExample, setProblemsExample] = React.useState<
    problemsExampleType[]
  >([]);

  const [userInput, setuserInput] = React.useState<string>("");

  async function getProblemData(pid: Pid) {
    let config = {
      method: "get",
      url: `${GET_PROBLEM_INFO_URL}/${pid}`,
      headers: {},
      withCredentials: true,
    };
    console.log(`${GET_PROBLEM_INFO_URL}/${pid}`);

    await axios(config)
      .then(function (response) {
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
        setMemoryLimit(response.data.memory_limit);
        setTimeLimit(response.data.time_limit);
        setSources(response.data.sources);
        setProblemsExample(response.data.problem_examples);
      })
      .catch(function (error) {
        alert("비로그인 상태입니다. 확인을 누르시면 메인으로 돌아갑니다.");
        router.push("/");
      });
  }

  React.useEffect(() => {
    if (pid != null) {
      setNowProblemNumber(pid);
      getProblemData(pid); // 문제 정보 불러오기
    }
    // eslint-disable-next-line
  }, [pid]);

  const lang_names: string[] = ["py", "c", "cpp", "javascript", "java"];

  const submit = () => {
    let data = {
      type: lang_names[langIdx],
      code: nowCode,
      problemId: parseInt(nowProblemNumber),
    };
    console.log(data);
    console.log(langIdx, nowCode, nowProblemNumber);
    let config = {
      method: "post",
      url: POST_CODE_SUBMIT_URL,
      headers: {},
      data: data,
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);

        if (
          response.data.message === "정답입니다." ||
          response.data.stderr === ""
        ) {
          alert(response.data.message);
        } else {
          alert("컴파일 에러입니다.");
        }
      })
      .catch(function (error) {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  const userComplie = () => {
    const submitCode = nowCode.replaceAll("\n", ";");
    let data = {
      type: lang_names[langIdx],
      code: submitCode,
      stdin: userInput,
    };
    let config = {
      method: "post",
      url: POST_CODE_TEST_URL,
      headers: {},
      data: data,
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

  return (
    <>
      <Head>
        {/** 웹 외부요소 선언부 */}
        <title>{nowProblemNumber}번 문제</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={`${nowProblemNumber} - ${title}`}
          key="title"
        />
      </Head>
      <S.Container>
        <Resizable
          style={Problem_default_style}
          className={styles.main}
          defaultSize={{
            width: "30vw",
            height: "94vh",
          }}
          minWidth="100px"
        >
          {/** 좌측 문제 부분 */}
          <S.top_content>
            <S.lang_selector
              name="langs"
              onChange={(selected: any) => {
                setNowlangIdx(selected.target.value);
                console.log(selected.target.value);
              }}
            >
              <S.lang value="0">Python</S.lang>
              <S.lang value="1">C</S.lang>
              <S.lang value="2">C++</S.lang>
              <S.lang value="3">Javascript</S.lang>
              <S.lang value="4">Java</S.lang>
            </S.lang_selector>
            <S.submitBtn onClick={submit}>제출</S.submitBtn>
          </S.top_content>
          <h2>
            {pid} - {title}
          </h2>
          <h4>메모리 제한 : {memoryLimit}MB</h4>
          <h4>시간 제한 : {parseInt(timeLimit) / 1000}초</h4>

          {content}

          <S.FormElement>
            <S.UserTextLabel htmlFor="userInput">테스트</S.UserTextLabel>
            <S.UserTextInput
              type="text"
              placeholder="입력"
              id="userInput"
              autoComplete="on"
              onChange={(e: any) => {
                setuserInput(e.target.value);
              }}
            />
            <S.submitBtn onClick={userComplie}>컴파일</S.submitBtn>
          </S.FormElement>

          {problemsExample.map((data: problemsExampleType, idx: number) => {
            return (
              <S.ExampleFullContainer key={idx}>
                <S.ExampleContainer>
                  <h2>
                    예제 입력 {idx + 1}{" "}
                    <CopyToClipboard text={data.example_input}>
                      <S.ExampleCopy href="#">복사</S.ExampleCopy>
                    </CopyToClipboard>
                  </h2>
                  <S.Example>{data.example_input}</S.Example>
                </S.ExampleContainer>
                <S.ExampleContainer>
                  <h2>
                    예제 출력 {idx + 1}{" "}
                    <CopyToClipboard text={data.example_output}>
                      <S.ExampleCopy href="#">복사</S.ExampleCopy>
                    </CopyToClipboard>
                  </h2>
                  <S.Example>{data.example_output}</S.Example>
                </S.ExampleContainer>
              </S.ExampleFullContainer>
            );
          })}
          <h2>출처</h2>
          <p>{sources}</p>
        </Resizable>
        <Code /> {/** 우측 IDE 부분 */}
      </S.Container>
    </>
  );
};

export default Problem;
