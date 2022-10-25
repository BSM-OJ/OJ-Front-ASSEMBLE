import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { GET_STARTING_CONTEST } from "../../../constant/url";
interface ContestType {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  password: string;
}
const StartingContentList: NextPage = () => {
  const [data, setData] = React.useState<ContestType[]>();

  React.useEffect(() => {
    const config = {
      method: "get",
      url: GET_STARTING_CONTEST,
      headers: {},
      withCredentials: true,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <main>
      {data?.map((data, idx) => {
        let start_date1 = data.start_date.slice(0, 10);
        let start_date2 = data.start_date.slice(11, 16);

        let end_date1 = data.end_date.slice(0, 10);
        let end_date2 = data.end_date.slice(11, 16);

        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "black",
              margin: "6px",
            }}
          >
            <span>{data.name}</span>
            <span>
              {start_date1} {start_date2}
            </span>
            <span>
              {end_date1} {end_date2}
            </span>
          </div>
        );
      })}
    </main>
  );
};

export default StartingContentList;
