import BottomAppBar from 'components/BottomAppBar';
import TopAppBar from 'components/TopAppBar';
import PostsList from 'components/PostsList';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopAppBar />
      <PostsList />
      <BottomAppBar />
    </Box>
  );
};

export default HomePage;
