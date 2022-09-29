import type { NextPage } from "next";
import * as S from "../index-style";
import Link from "next/link";

interface PageProps {
  problemNumber: string;
  complete: string;
  problemName: string;
}
const ProblemLevel = (props: PageProps) => {
  return (
    <S.Problem>
      <S.Level style={{ backgroundColor: "#00aaff" }}>
        <S.LevelText>{props.problemNumber}</S.LevelText>
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
