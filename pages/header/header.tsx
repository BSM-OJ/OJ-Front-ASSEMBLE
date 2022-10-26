import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import useStore from "../../context/useStore";
import * as T from "../../styles/header2/style";
import axios from "axios";
import { LOGOUT_URL } from "../../constant/url";

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

  const router = useRouter();

  return (
    <>
      <div>
        <T.HeaderBox>
          <T.Nav>
            <Link href="/hold">대회개최</Link>
            <Link href="/contest/starting">대회목록</Link>
            <Link href="/problem/my">나의 문제</Link>
            <Link href="/solved">내가 푼 문제</Link>
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
                    const config = {
                      method: "get",
                      url: LOGOUT_URL,
                      withCredentials: true,
                      headers: {},
                    };
                    axios(config).then((response) => {
                      console.log(response.data);
                      alert("로그아웃이 완료되었습니다");
                    });
                    router.reload();
                  }}
                >
                  로그아웃
                </span>
              </>
            ) : (
              <Link href="/login">
                <li style={{ listStyle: "none" }}>로그인</li>
              </Link>
            )}
          </div>
        </T.HeaderBox>
      </div>
    </>
  );
};
export default Header;
