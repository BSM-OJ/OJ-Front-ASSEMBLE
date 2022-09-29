import type { NextPage } from "next";
import * as S from "../index-style";
interface PageProps {
  level: string;
  complete: string;
  problemName: string;
}
const ProblemLevel = (props: PageProps) => {
  return (
    <S.Problem>
      <S.Level style={{ backgroundColor: "#00aaff" }}>
        <S.LevelText>{props.level}</S.LevelText>
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
