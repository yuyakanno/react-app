import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import InsightsIcon from '@mui/icons-material/Insights';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

// const App = () => {
//   return (
//     <BrowserRouter>
//     <h1>react app</h1>
//     <ul>
//         <li>
//           <Link to="/omikuji">おみくじ</Link>
//         </li>
//         <li>
//           <Link to="/janken">じゃんけん</Link>
//         </li>
//       </ul>
//       <hr />
//     <Routes>
//       <Route path="/omikuji" element={<Omikuji />} />
//       <Route path="/janken" element={<Janken />} />
//     </Routes>
//   </BrowserRouter>
//   );
// };

const App = () => {
return(
  <BrowserRouter>
 
  <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <Link to="/omikuji"><InsightsIcon /> おみくじ</Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link to="/janken"><SignLanguageIcon /> じゃんけん</Link>
        </ListItem>
        <Divider light />
  </List>

    <Routes>
      <Route path="/omikuji" element={<Omikuji />} />
      <Route path="/janken" element={<Janken />} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;