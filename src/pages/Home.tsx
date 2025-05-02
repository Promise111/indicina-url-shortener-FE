import { Container, Typography } from '@mui/material';
import UrlForm from '../components/UrlForm';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        URL Shortener
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Shorten your long URLs to make them easier to share.
      </Typography>
      <UrlForm />
    </Container>
  );
};

export default Home;