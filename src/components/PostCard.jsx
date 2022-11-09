import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useDispatch,useSelector } from "react-redux"
import { useDeletePostMutation } from 'redux/posts/postsApi';
import{getUserEmail}from "../redux/auth/authSelector"


export default function PostCard({id, text, imagePost, createdAt, author }) {
  const dispatch = useDispatch()
  const [deletePost] = useDeletePostMutation()
  const userEmail = useSelector(getUserEmail);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="user">{author.name[0]}</Avatar>}
      action={
          <IconButton
            aria-label="delete post"
            onClick={() => dispatch(deletePost(id))}
          >
            <DeleteForeverIcon />
          </IconButton>
        }
        title={author.name}
        subheader={new Date(createdAt).toUTCString()}
      />
      {imagePost && (
        <CardMedia
          component="img"
          height="194"
          image={imagePost}
          alt="post image"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions> */}
    </Card>
  );
}
