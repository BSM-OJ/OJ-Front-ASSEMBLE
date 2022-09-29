import create from "zustand";

type Pid = string | string[] | undefined;
const useStore = create((set: any) => ({
  langIdx: 0,
  setNowlangIdx: (input: number) => set({ langIdx: input }),
  nowProblemNumber: "1", // 문자열 입니다 제발 주의
  setNowProblemNumber: (problem: Pid) => set({ nowProblemNumber: problem }),
  nowCode: "",
  setNowCode: (writeCode: string) => set({ nowCode: writeCode }),
  isLogin: false,
  setIsLogin: (isLoginInput: boolean) => set({ isLogin: isLoginInput }),
  headerLoginText: "로그인",
  setHeaderLoginText: (setHeaderLoginTextInput: string) =>
    set({ headerLoginText: setHeaderLoginTextInput }),
}));

export default useStore;
