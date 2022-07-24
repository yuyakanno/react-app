import { useState } from "react";
import { ActionButton2 } from "../components/ActionButton2";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Janken = () => {
    const [jankenResult, setJankenResult] = useState({
        myHand: "入力待ち",
        comHand: "待機中",
        result: "未対戦",
      });

    const [history, setHistory] = useState([]);

    const getJankenResult = (myHand) => {
        const hand = ["グー", "チョキ", "パー"];
        const myIndex = hand.indexOf(myHand);
        const comIndex = Math.floor(Math.random() * 3);
        const resultSheet = [
            ["Draw", "Win", "Lose"],
            ["Lose", "Draw", "Win"],
            ["Win", "Lose", "Draw"],
        ];
        return {
            myHand: myHand,
            comHand: hand[comIndex],
            result: resultSheet[myIndex][comIndex],
        };
    };

    const getJanken = (myHand) => {
        const result = getJankenResult(myHand);
        setJankenResult(result);
        setHistory([result, ...history]);
      };

  return (
    <>
      <p>じゃんけんの画面</p>
      <Stack spacing={2} direction="row">
        <ActionButton2 text="グー" action={() => getJanken("グー")} />
        <ActionButton2 text="チョキ" action={() => getJanken("チョキ")} />
        <ActionButton2 text="パー" action={() => getJanken("パー")} />
      </Stack>
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>    
      
      <p>履歴</p>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>自分の手</TableCell>
            <TableCell>相手の手</TableCell>
            <TableCell>結果</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {history.map((x, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{x.myHand}</TableCell>
              <TableCell>{x.comHand}</TableCell>
              <TableCell>{x.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
  );
};

      {/* <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
