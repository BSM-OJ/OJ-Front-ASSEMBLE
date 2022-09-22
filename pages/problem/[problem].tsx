import React, { Dispatch, SetStateAction } from "react";
import Code from "./Code";
import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import * as S from "./style";
import axios from "axios";
import { Resizable } from "re-resizable";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import useStore from "../../context/useStore";
import styles from "../../styles/Home.module.scss";
// import { URL } from "../../constant/constant";

const Problem_default_style: object = {
  // 문제 기본 디자인틀
  alignItems: "center",
  justifyContent: "center",
  background: "#333",
  color: "#fff",
} as const;

type Pid = string | string[] | undefined; // pid 기본 타입, 처음에 로딩 안될때는 undefined라서 어쩔수없

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
  }: {
    nowCode: string;
    setNowCode: any;
    langIdx: number;
    setNowlangIdx: any;
    nowProblemNumber: string;
    setNowProblemNumber: any;
  } = useStore();

  const pid: Pid = route.problem; // 문제 번호
  React.useEffect(() => {
    (async () => {
      await setNowProblemNumber(pid);
      console.log(nowProblemNumber);
    })();
  }, [pid, setNowProblemNumber, nowProblemNumber]);

  function submit() {
    axios
      .post(`${""}`, {
        send_code: nowCode,
      })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  return (
    <>
      <Head>
        {/** 웹 외부요소 선언부 */}
        <title>{nowProblemNumber}번 문제</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={"엄엄"} key="title" />
      </Head>
      <S.container>
        <Resizable
          style={Problem_default_style}
          className={styles.main}
          defaultSize={{
            width: "30vw",
            height: "100vh",
          }}
          minWidth="100px"
          minHeight="100vh"
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
          <h2>{pid} 멀티탭 스케줄링</h2>
          기숙사에서 살고 있는 준규는 한 개의 멀티탭을 이용하고 있다. 준규는
          키보드, 헤어드라이기, 핸드폰 충전기, 디지털 카메라 충전기 등 여러 개의
          전기용품을 사용하면서 어쩔 수 없이 각종 전기용품의 플러그를 뺐다
          꽂았다 하는 불편함을 겪고 있다. 그래서 준규는 자신의 생활 패턴을
          분석하여, 자기가 사용하고 있는 전기용품의 사용순서를 알아내었고, 이를
          기반으로 플러그를 빼는 횟수를 최소화하는 방법을 고안하여 보다 쾌적한
          생활환경을 만들려고 한다. 예를 들어 3 구(구멍이 세 개 달린) 멀티탭을
          쓸 때, 전기용품의 사용 순서가 아래와 같이 주어진다면, 키보드
          헤어드라이기 핸드폰 충전기 디지털 카메라 충전기 키보드 헤어드라이기
          키보드, 헤어드라이기, 핸드폰 충전기의 플러그를 순서대로 멀티탭에 꽂은
          다음 디지털 카메라 충전기 플러그를 꽂기 전에 핸드폰충전기 플러그를
          빼는 것이 최적일 것이므로 플러그는 한 번만 빼면 된다.
          <h2>입력</h2>첫 줄에는 멀티탭 구멍의 개수 N (1 ≤ N ≤ 100)과 전기
          용품의 총 사용횟수 K (1 ≤ K ≤ 100)가 정수로 주어진다. 두 번째 줄에는
          전기용품의 이름이 K 이하의 자연수로 사용 순서대로 주어진다. 각 줄의
          모든 정수 사이는 공백문자로 구분되어 있다.
          <h2>출력</h2>
          하나씩 플러그를 빼는 최소의 횟수를 출력하시오.
          <h2>
            예제 입력 1 <Link href="#">복사</Link>
          </h2>
          <pre>
            2 7<br />2 3 2 3 1 2 7
          </pre>
          <h2>
            예제 출력 1 <Link href="#">복사</Link>
          </h2>
          <pre>2</pre>
          <h2>출처</h2>
          <Link href="#">
            Seoul Nationalwide Internet Competition 2007 - 멀티탭 스케줄링
          </Link>
        </Resizable>
        <Code /> {/** 우측 IDE 부분 */}
      </S.container>
    </>
  );
};

export default Problem;
