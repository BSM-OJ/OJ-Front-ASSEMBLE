import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import axios from "axios";
import { DELETE_PROBLEM } from "../../constant/url";

interface Props {
  problemNumber: string;
}

export default function PositionedMenu(props: Props) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        수정
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            router.push(`register/${props.problemNumber}`);
          }}
        >
          예제 데이터 추가
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push(`register/private/${props.problemNumber}`);
          }}
        >
          채점 데이터 추가
        </MenuItem>
        <MenuItem
          onClick={() => {
            let config = {
              method: "delete",
              url: `${DELETE_PROBLEM}/${props.problemNumber}`,
              headers: {},
              withCredentials: true,
            };
            axios(config)
              .then(function (response) {
                console.log(response.data);
                alert("삭제되었습니다.");
                router.reload();
              })
              .catch(function (error) {});
          }}
        >
          문제 삭제하기
        </MenuItem>
      </Menu>
    </div>
  );
}
