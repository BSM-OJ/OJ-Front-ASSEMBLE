import type { NextPage } from "next";
import * as S from "../index-style";
import Link from "next/link";

interface PageProps {
  difficulty: number;
  problemNumber: string;
  complete: string;
  problemName: string;
}
const ProblemLevel = (props: PageProps) => {
  return (
    <S.Problem>
      <S.Level
        style={
          props.difficulty === 1
            ? { backgroundColor: "#4CAF50" }
            : props.difficulty === 2
            ? { backgroundColor: "#FFC107" }
            : props.difficulty === 3
            ? { backgroundColor: "#FF9800" }
            : props.difficulty === 4
            ? { backgroundColor: "#FF5722" }
            : { backgroundColor: "#D01F1F" }
        }
      >
        <S.LevelText>LV.{props.difficulty}</S.LevelText>
      </S.Level>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Link href={`/problem/${props.problemNumber}`}>
          <S.Content>{props.problemName}</S.Content>
        </Link>
        {props.complete === "complete" ? (
          <S.CompleteButton>완료</S.CompleteButton>
        ) : null}
      </div>
    </S.Problem>
  );
};

export default ProblemLevel;
