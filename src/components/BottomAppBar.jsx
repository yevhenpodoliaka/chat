import { AppBar, IconButton, TextField, Toolbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


export default function BottomAppBar() {
  return (
    <AppBar
      component="footer"
      sx={{
        position: 'fixed',
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar sx={{width:300, mx:"auto"}}>
        <TextField fullWidth label="send message" />
        <IconButton color="inherit" aria-label="send message" size="small">
          <SendIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
