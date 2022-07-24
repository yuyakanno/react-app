import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

export const ActionButton3 = ({ text, action }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" type="button" onClick={action}><PanToolAltIcon />おみくじをひく</Button>
        </Stack>
    );
  };