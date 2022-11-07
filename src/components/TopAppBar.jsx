import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import avatar from "../images/avatar.png"





function TopAppBar() {

  
  const handlerLogOutClick = () => {console.log("clik")}

 
  return (
    <AppBar
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 'auto',
      }}
    >
      <Toolbar sx={{width:320,mx:"auto"}}>
        <Typography>Only Five</Typography>
        <Box display="flex" ml="auto" gap="8px">
          <Avatar alt="{userName}" src={avatar} />
          <Button variant="contained" onClick={handlerLogOutClick}>
            logOut
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default TopAppBar;
