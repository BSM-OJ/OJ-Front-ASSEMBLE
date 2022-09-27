import styled from "styled-components";
import { color } from "../color";

export const submitBtn = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: ${color.blue};
  color: #333;
  width: 60px;
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

export const container = styled.div`
  display: flex;
`;

export const top_content = styled.div`
  display: flex;
  justify-content: space-between;
`;
