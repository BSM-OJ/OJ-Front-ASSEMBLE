import styled from "styled-components";
import { color } from "../color";

export const RegisterInput = styled.input`
  display: block;
  width: 500px;
  height: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${color.main};
  &::placeholder {
    font-size: 16px;
  }
`;

export const RegisterTextarea = styled.textarea`
  display: block;
  width: 500px;
  height: 600px;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${color.main};
  resize: none;
  &::placeholder {
    font-size: 16px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    overflow: hidden;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    border-radius: 5px;
    background: #777;
  }
`;

export const RegisterLabel = styled.label`
  font-size: 24px;
  display: block;
  font-weight: 700;
  color: ${color.main};
  text-align: center;
  margin: 30px;
`;
export const MainText = styled.p`
  font-size: 40px;
  text-align: center;
  color: ${color.main};
`;
export const FormContainer = styled.div`
  margin: 0 auto;
  [type="button"] {
    margin: 20px auto;
  }
`;
export const DisabledRegisterButton = styled.button`
  background-color: ${color.darkGrey};
  width: 100%;
  height: 54px;
  display: block;
  color: ${color.black};
  border: 0;
  border-radius: 5px;
  margin: 36px auto;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const RegisterButton = styled(DisabledRegisterButton)`
  background-color: ${color.main};
  color: ${color.white};
  border-radius: 5px;
  margin: 20px auto;
  width: 300px;
  &:hover {
    background-color: ${color.lightMain};
    transition: 0.3s;
  }
  &:focus {
    outline: none;
  }
`;
