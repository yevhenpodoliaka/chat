import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelector';
import { signOutUser } from '../redux/auth/authOptions';

function TopAppBar() {
  const dispatch = useDispatch();
  const UserName = useSelector(getUserName);

  return (
    <AppBar
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 'auto',
      }}
    >
      <Toolbar sx={{ width: 320, mx: 'auto' }}>
        <Typography>Chat</Typography>
        <Box display="flex" ml="auto" gap="8px">
          <Avatar aria-label="user">{UserName[0]}</Avatar>
          <Button variant="contained" onClick={() => dispatch(signOutUser())}>
            logOut
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default TopAppBar;
