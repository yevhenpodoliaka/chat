import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';

export default function PostCard({ id, text, imagePost, createdAt, author }) {
  return (
    <Card sx={{ maxWidth: 345, my: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Avatar aria-label="user">{author.name[0]}</Avatar>
        <Typography variant="button" display="block" ml="8px">
          {author.name}
        </Typography>
      </Box>
      <CardMedia
        component="img"
        height="auto"
        image={imagePost}
        alt="image post"
      />
      <CardContent>
        <Typography variant="body2" noWrap>
          {text}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" ml="auto">
          {new Date(createdAt).toDateString()}
        </Typography>
      </Box>
    </Card>
  );
}
