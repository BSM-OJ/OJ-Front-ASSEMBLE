import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header: NextPage = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const [userToggled, setUserToggled] = React.useState(false);

  return (
    <S.Header_Wrapper isToggled={isToggled} userToggled={userToggled}>
      <div className="logo">
        <Image
          src="/../public/images/logo/logo_big.png"
          width={120}
          height={50}
          alt="logo"
        />
      </div>
      <ul className="header__menulist">
        <Link href="/">
          <li>문제목록</li>
        </Link>
        <Link href="/contest/list">
          <li>대회목록</li>
        </Link>
        <Link href="/">
          <li>대회개최</li>
        </Link>
      </ul>
      <div className="info_wrapper">
        <div className="search_contanier">
          <input className="search" />
          <button className="search_btn" style={{ marginLeft: "10px" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ccc",
          }}
        >
          <div
            className="user"
            onClick={() => {
              setUserToggled(!userToggled);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span> 유나은님</span>
          </div>
        </div>
      </div>
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>
    </S.Header_Wrapper>
  );
};
export default Header;
