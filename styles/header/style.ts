import styled from "styled-components";

export const Header_Wrapper = styled.header`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .info_wrapper {
    display: flex;
    justify-content: space-around;
    width: 45%;
  }
  .header__menulist {
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
  }
  .user {
    display: flex;
    align-items: center;
  }
  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: block;
  }
  .search_contanier {
    width: 70%;
    display: flex;
  }
  .search {
    height: 30px;
    border: 1px solid whitesmoke;
    background-color: #333333;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
  }

  .search_btn {
  }

  @media screen and (max-width: 910px) {
    flex-wrap: wrap;

    .header__right {
      display: ${(props: { isToggled: boolean; userToggled: boolean }) =>
        props.userToggled ? "flex" : "none"};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .user,
    .header__menulist {
      display: ${(props: { isToggled: boolean; userToggled: boolean }) =>
        props.isToggled ? "flex" : "none"};
      flex-direction: column;
      padding: 0;
      width: 100%;
      background-color: black;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem auto;
      padding: 0;
    }

    .info_wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
    }
    .search {
      width: 60%;
    }

    .toggle {
      width: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Logo = styled.img`
  height: 28px;
`;

export const Nav_item = styled.a``;
export const Nav = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;
