import BottomAppBar from 'components/BottomAppBar';
import TopAppBar from 'components/TopAppBar';
import { Box } from "@mui/material"

const HomePage = () => {


  return (
    <Box sx={{ display: 'flex',flexDirection:"column", minHeight:"100vh" }}>
      <TopAppBar />
      <BottomAppBar />
    </Box>
  );
};

export default HomePage;
