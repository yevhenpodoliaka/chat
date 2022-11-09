import { AppBar, IconButton, TextField, Toolbar,Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import{useState} from "react"
import { useAddPostMutation } from 'redux/posts/postsApi';


export default function BottomAppBar() {
  const [text, setText] = useState('')
  
  const [addPost] = useAddPostMutation()

  const handleChange = (e) => {
    setText(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    addPost(data )
    setText("");
  }

  return (
    <AppBar
      component="footer"
      sx={{
        position: 'fixed',
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar sx={{ width: 300, mx: 'auto' }}>
        <Box
          sx={{ display: 'flex' }}
          component="form"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <TextField
            variant="standard"
            label="send message"
            name="text"
            value={text}
            onChange={handleChange}
          />
          <IconButton component="label" variant="outlined" size="small">
            <input hidden type="file" name="imagePost" />
            <AddAPhotoIcon />
          </IconButton>

          <IconButton
            type="submit"
            color="inherit"
            aria-label="send message"
            size="small"
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
