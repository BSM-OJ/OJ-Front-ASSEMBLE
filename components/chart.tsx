import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({
  accepted,
  compilation_error,
  memory_limit_exceeded,
  submissions,
  time_limit_exceeded,
  wrong_answer,
}: {
  accepted: number;
  compilation_error: number;
  memory_limit_exceeded: number;
  submissions: number;
  time_limit_exceeded: number;
  wrong_answer: number;
}) => {
  const data = [
    { title: "시간 초과", value: time_limit_exceeded, color: "#ffb3b3" },
    { title: "메모리 초과", value: memory_limit_exceeded, color: "#ffb151" },
    { title: "컴파일 에러", value: compilation_error, color: "#7494fe" },
    { title: "정답", value: accepted, color: "#00ff88" },
    { title: "오답", value: wrong_answer, color: "#f63e3e" },
  ];

  const chart_data = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].value !== 0) {
      chart_data.push(data[i]);
    }
  }

  return (
    <>
      <PieChart
        style={{
          display: "block",
          width: "500px",
          height: "500px",
          margin: "50px auto",
          fontSize: "10px",
        }}
        data={chart_data}
        label={({ dataEntry }) => dataEntry?.title + " " + dataEntry?.value}
        animate
      />
    </>
  );
};

export default Chart;
