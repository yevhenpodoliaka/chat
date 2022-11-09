import { Box } from '@mui/material';
import { useGetPostsQuery } from 'redux/posts/postsApi';

import PostCard from 'components/PostCard';

const PostsList = () => {
  const { data } = useGetPostsQuery();
  let posts = data?.data.posts;

    

  return (
    <Box>
      {posts?.map(({ _id, text, imagePost, createdAt, owner: { name ,email} }) => (
        <PostCard
          key={_id}
          id={_id}
          text={text}
          imagePost={imagePost}
          createdAt={createdAt}
          author={{name,email}}
          
        />
      ))}
    </Box>
  );
};

export default PostsList;
