import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  // deleteCookie("token", { path: "/path", domain: ".yourdomain.com" });
  const router = useRouter();

  return (
    <S.Header_Wrapper>
      <Link href="/">
        <li>메인</li>
      </Link>
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
      <Link href="/">
        <li>대회개최</li>
      </Link>
      <Link href={`/problem/1`} as={`/problem/1`}>
        <li>문제풀기</li>
      </Link>
    </S.Header_Wrapper>
  );
};
export default Header;
