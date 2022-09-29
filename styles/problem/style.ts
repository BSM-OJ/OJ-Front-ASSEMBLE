import styled from "styled-components";
import { color } from "../color";

export const submitBtn = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: ${color.blue};
  color: #333;
  min-width: 60px;
  height: 40px;
  font-size: 16px;
  transition: 0.3s;
  font-family: "IBMPlexSansKR-Regular" !important;
  &:hover {
    background-color: ${color.skyblue};
    transition: 0.3s;
    color: #333;
  }
`;

export const lang_selector = styled.select`
  color: ${color.main};
  background-color: ${color.background};
  border: 0;
  border-radius: 5px;
  padding: 8px;
  font-family: "IBMPlexSansKR-Regular" !important;
`;

export const lang = styled.option`
  color: ${color.background};
  background-color: ${color.main};
`;

export const Container = styled.div`
  display: flex;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const top_content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ExampleContainer = styled.div`
  margin: 20px 0;
`;

export const ExampleFullContainer = styled.div`
  margin: 70px 0;
`;

export const ExampleCopy = styled.a`
  font-size: 16px;
`;

export const Example = styled.p`
  overflow-x: auto;
  overflow-y: auto;
  line-height: normal;
  background-color: grey;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const UserTextInput = styled.input`
  display: block;
  width: 90%;
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
  margin-top: 40px;
`;

export const UserTextLabel = styled.label`
  font-size: 18px;
  display: block;
  font-weight: 700;
  color: ${color.main};
`;
