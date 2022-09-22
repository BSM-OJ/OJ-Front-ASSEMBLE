import React from "react";
import type { NextPage } from "next";
import * as S from "./style";
import Link from "next/link";
import Image from "next/image";

const Header: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <S.HeaderBox>
      <S.Logo alt="logo" src="/images/logo.png" />
      <S.Nav>
        <S.Nav_item href="/hold">대회개최</S.Nav_item>
        <S.Nav_item href="/list">대회목록</S.Nav_item>
        <S.Nav_item href="/">문제목록</S.Nav_item>
      </S.Nav>
      <S.Search />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ccc",
        }}
      >
        <Image
          alt="profile"
          src="/images/profile.png"
          width={"40"}
          height={"40"}
        />
        유나은님
      </div>
      
    </S.HeaderBox>
  );
};
export default Header;
