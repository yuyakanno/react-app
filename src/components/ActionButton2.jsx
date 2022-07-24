import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ActionButton2 = ({ text, action }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" type="button" onClick={action}>{text}</Button>
        </Stack>
    );
  };

//   export default function BasicButtons() {
//     return (
//       <Stack spacing={2} direction="row">
//         <Button variant="text">Text</Button>
//       </Stack>
//     );
//   }