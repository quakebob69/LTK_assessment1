import * as React from 'react';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

export default function AccountMenu() {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>contact</Typography>
        <Typography sx={{ minWidth: 100 }}>profile</Typography>
        <Tooltip title="Todo List">
          <NavLink to="/todo">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
            >
              <Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
            </IconButton>
          </NavLink>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
