import Container from '@mui/material/Container';
import AppRoutes from './AppRoutes';

export const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <AppRoutes />
    </Container>
  );
};
