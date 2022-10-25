import * as S from "../index-style";
import Link from "next/link";
import Dropdown from "./Dropdown";

interface PageProps {
  difficulty: number;
  problemNumber: string;
  complete: string;
  problemName: string;
  author: number;
  myId: number;
}
const ProblemLevel = (props: PageProps) => {
  return (
    <S.Problem>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "42px",
        }}
      >
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

        {props.problemNumber && props.author === props.myId ? (
          <Dropdown problemNumber={props.problemNumber} />
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4px",
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
