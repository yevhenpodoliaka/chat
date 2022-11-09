import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import avatar from "../images/avatar.png"

import { useDispatch } from "react-redux"
import {signOutUser}from "../redux/auth/authOptions"





function TopAppBar() {

  
const dispatch= useDispatch()

 
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
          <Avatar alt="{userName}" src={avatar} />
          <Button variant="contained" onClick={()=>dispatch(signOutUser())}>
            logOut
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default TopAppBar;
