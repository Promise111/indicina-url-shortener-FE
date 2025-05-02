import { Container, Typography } from '@mui/material';
import UrlList from '../components/UrlList';

const ListPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        All URLs
      </Typography>
      <UrlList />
    </Container>
  );
};

export default ListPage;