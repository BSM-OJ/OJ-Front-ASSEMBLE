import styled from "styled-components";


export const submitBtn = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: #00aaff;
  color: #333;
  width: 60px;
  height: 40px;
  font-size: 16px;
  transition: 0.3s;
  font-family: "IBMPlexSansKR-Regular" !important;
  &:hover {
    background-color: #73c6ef;
    transition: 0.3s;
    color: #333;
  }
`;

export const lang_selector = styled.select`
  color: white;
  background-color: rgba(33, 122, 244, 0.1);
  border: 0;
  border-radius: 5px;
  padding: 8px;
  font-family: "IBMPlexSansKR-Regular" !important;
`;

export const lang = styled.option`
  color: #333;
  background-color: #fff;
`;

export const container = styled.div`
  display: flex;
`;

export const top_content = styled.div`
  display: flex;
  justify-content: space-between;
`;
