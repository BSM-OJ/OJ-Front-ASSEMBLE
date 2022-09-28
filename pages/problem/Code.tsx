// reference : https://uiwjs.github.io/react-codemirror/
import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Home.module.scss";
import useStore from "../../context/useStore";

import CodeMirror from "@uiw/react-codemirror";

import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";

import { xcodeDark } from "@uiw/codemirror-theme-xcode";

// py, c, cpp, node, java
// 각각 0, 1, 2, 3, 4 번

const code_type = [python(), cpp(), cpp(), javascript(), java()];
const code_templates: string[] = [
  `print("Hello World!")`,

  `#include <stdio.h>
int main() {
    printf("Hello World!");
    return 0;
}`,

  `#include<bits/stdc++.h>
using namespace std;
int main() {
    cout << "Hello World!";
    return 0;
}`,

  `console.log("Hello World!")`,

  `class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
  }
}`,
];

const Code: NextPage = () => {
  const {
    nowCode, // 지금 쓰고있는 코드
    setNowCode,
    langIdx, // 언어 idx
  }: {
    nowCode: string;
    setNowCode: any;
    langIdx: number;
  } = useStore();

  const now_selected_lang: any = code_type[langIdx]; // 현재 선택한 언어
  const now_template = code_templates[langIdx]; // 선택한 언어의 템플릿

  return (
    <>
      <CodeMirror
        className={styles.editor}
        theme={xcodeDark}
        value={now_template}
        extensions={[now_selected_lang]}
        onChange={(value: any, viewUpdate: any) => {
          setNowCode(value);
          console.log(nowCode);
        }}
      />
    </>
  );
};

export default Code;
