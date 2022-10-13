import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import useStore from "../../context/useStore";
import * as T from "./style";

const Header: NextPage = () => {
  const {
    headerLoginText,
    setHeaderLoginText,
    isLogin,
  }: {
    headerLoginText: string;
    setHeaderLoginText: any;
    isLogin: boolean;
  } = useStore();

  if (typeof window !== "undefined") {
  }
  const router = useRouter();

  return (
    <>
      <div>
        <T.HeaderBox>
          <T.Nav>
            <Link href="/hold">대회개최</Link>
            <Link href="/contest">대회목록</Link>
            <Link href="/">문제목록</Link>
          </T.Nav>
          <T.Search />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "#ccc",
            }}
          >
            {isLogin ? (
              <>
                {localStorage.getItem("userName")}님
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    localStorage.removeItem("userName");
                    deleteCookie("token");
                    router.reload();
                  }}
                >
                  로그아웃
                </span>
              </>
            ) : (
              <Link href="/login">
                <li>로그인</li>
              </Link>
            )}
          </div>
        </T.HeaderBox>
      </div>
    </>
  );
};
export default Header;
