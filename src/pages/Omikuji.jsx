import { useState } from "react";
import { ActionButton3 } from "../components/ActionButton3";

export const Omikuji = () => {
    const [omikujiResult, setOmikujiResult] = useState("");

    const getOmikuji = () => {
        const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
          Math.floor(Math.random() * 5)
        ];
        console.log(result);

        setOmikujiResult(result);
      };
  
    return (
    <>
      <p>おみくじの画面</p>
      <ActionButton3 action={getOmikuji} />
        <p>{omikujiResult}</p>
    </>
  );
};