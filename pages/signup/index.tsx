import axios from "axios";
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import * as S from "../../styles/login/style";

import { SIGNUP_URL, EMAIL_CERTIFICATE_URL } from "../../constant/url";

import { NextRouter, useRouter } from "next/router";

const Signup: NextPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const router: NextRouter = useRouter();

  const submit = () => {
    let data = {
      nickname: nickname,
      email: email,
      password: password,
    };
    let config = {
      method: "post",
      url: EMAIL_CERTIFICATE_URL,
      headers: {},
      data: data,
      withCredentials: true,
    };
    console.log(nickname, email, password);
    axios(config)
      .then(function (response) {
        alert("가입이 완료되었습니다.");
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 400) {
          alert("계정 조건이 잘못되었습니다.");
        }
      });
  };

  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginTop: "50px" }}>
        <S.MainText href="/">회원가입</S.MainText>
        <S.TopBar />
        <S.FormContainer>
          <S.FormElement>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <S.LoginLabel htmlFor="username">
                  Email
                  <S.RedStar>&nbsp;*</S.RedStar>
                </S.LoginLabel>
                <S.LoginInput
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  id="username"
                  autoComplete="on"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <S.LoginLabel htmlFor="password">
              Password
              <S.RedStar>&nbsp;*</S.RedStar>
            </S.LoginLabel>
            <S.LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요. (8~30자)"
              id="password"
              autoComplete="on"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />

            <S.LoginLabel htmlFor="nickname">
              닉네임
              <S.RedStar>&nbsp;*</S.RedStar>
            </S.LoginLabel>
            <S.LoginInput
              type="nickname"
              placeholder="닉네임을 입력해주세요."
              id="nickname"
              autoComplete="on"
              onChange={(e: any) => {
                setNickname(e.target.value);
              }}
            />

            {email != null && password != null ? (
              <S.LoginButton onClick={submit}>회원가입</S.LoginButton>
            ) : (
              <S.DisabledLoginButton disabled>회원가입</S.DisabledLoginButton>
            )}
          </S.FormElement>
        </S.FormContainer>
      </div>
    </>
  );
};

export default Signup;
