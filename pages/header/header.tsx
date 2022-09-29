import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import useStore from "../../context/useStore";

const Header: NextPage = () => {
  // deleteCookie("token", { path: "/path", domain: ".yourdomain.com" });
  const {
    headerLoginText,
    setHeaderLoginText,
    isLogin,
  }: { headerLoginText: string; setHeaderLoginText: any; isLogin: boolean } =
    useStore();

  const router = useRouter();

  return (
    <S.Header_Wrapper>
      <Link href="/">
        <li>메인</li>
      </Link>
      <li>현재:{headerLoginText}</li>

      <Link href="/login">
        <li>로그인</li>
      </Link>

      <li
        onClick={() => {
          deleteCookie("token");
          router.reload();
        }}
      >
        로그아웃
      </li>
      <Link href="/signup">
        <li>회원가입</li>
      </Link>
      <Link href="/contest/list">
        <li>대회목록</li>
      </Link>
      <Link href="/register">
        <li>문제등록</li>
      </Link>
      <Link href="/register/1">
        <li>문제 예제등록</li>
      </Link>
      <Link href="/register/private/1">
        <li>문제 찐테케등록</li>
      </Link>

      <Link href={`/problem/1`} as={`/problem/1`}>
        <li>문제풀기</li>
      </Link>
    </S.Header_Wrapper>
  );
};
export default Header;
