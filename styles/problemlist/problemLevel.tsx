import type { NextPage } from "next";
import * as S from "../index-style";
interface PageProps {
  level: string;
  complete: string;
  star: string;
  problemName: string;
}
const ProblemLevel = (props: PageProps) => {
  return (
    <S.Problem>
      <S.Level
        style={
          props.level === "1"
            ? { backgroundColor: "#4CAF50" }
            : props.level === "2"
            ? { backgroundColor: "#FFC107" }
            : props.level === "3"
            ? { backgroundColor: "#FF9800" }
            : props.level === "4"
            ? { backgroundColor: "#FF5722" }
            : { backgroundColor: "#D01F1F" }
        }
      >
        <S.LevelText>LV {props.level}</S.LevelText>
      </S.Level>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <S.Content>{props.problemName}</S.Content>
        {props.complete === "complete" ? (
          <S.CompleteButton>완료</S.CompleteButton>
        ) : null}
      </div>
    </S.Problem>
  );
};

export default ProblemLevel;
