import styled from "styled-components";

export const join_container = styled.div`
  width: 450px;
  height: 250px;
  background-color: #fff;
  color: #000;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 20px;
`;

export const title_container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const title_container_text = styled.h1`
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const join_input = styled.input`
  width: 270px;
  height: 20px;
  border: 0;
  border-bottom: 1px solid black;
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-family: "IBMPlexSansKR-Regular";
  &focus {
    outline: none;
  }
`;

export const join_button = styled.button`
  // 긴 버튼
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-family: "IBMPlexSansKR-Regular";
  width: 300px;
  height: 40px;
  border: 0;
  border-radius: 7px;
  background-color: #00aaff;
  color: white;
  font-size: 20px;
`;

export const contest_join_button = styled(join_button)`
  // 짧은 버튼
  width: 100px;
  height: 30px;
  background-color: #00aaff;
  margin: 0;
  border: 0;
`;

export const contest_container = styled.div`
  width: 70%;
  height: 60px;
  background-color: #0d1117;
  color: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 5px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`;
