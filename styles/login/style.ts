import theme from "../theme";
import { color } from "../color";
import styled from "styled-components";

export const CertificateButton = styled.button`
  width: 50px;
  background-color: ${color.main};
  position: absolute;
  top: 3px;
  left: 300px;
  height: 35px;
  display: block;
  color: ${color.black};
  border: 0;
  border-radius: 8px;
  margin: 36px auto;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const LoginInput = styled.input`
  display: block;
  height: 10px;
  margin: 10px 0;
  padding: 20px 20px;
  border-radius: 8px;
  border: 0;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormElement = styled.div`
  display: block;
`;

export const LoginLabel = styled.label`
  font-size: 18px;
  display: block;
  font-weight: 700;
  color: ${color.main};
`;

export const RedStar = styled.span`
  color: red;
`;

export const DisabledLoginButton = styled.button`
  background-color: ${color.darkGrey};
  width: 100%;
  height: 54px;
  display: block;
  color: ${color.black};
  border: 0;
  border-radius: 8px;
  margin: 36px auto;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const LoginButton = styled(DisabledLoginButton)`
  background-color: ${color.main};
  &:hover {
    background-color: ${color.lightMain};
    transition: 0.3s;
  }
`;

export const LoginBottom = styled.a`
  display: block;
  color: ${color.main};
  padding: 0 10px;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const TopBar = styled.hr`
  display: block;
  width: 15%;
  height: 5px;
  background-color: ${color.main};
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.a`
  text-align: center;
  display: block;
  color: ${color.main};
  transition: 0.3s;
  font-size: 24px;
  &:hover {
    transition: 0.3s;
    text-decoration: underline;
  }
`;
