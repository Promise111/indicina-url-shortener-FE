import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ mr: 2 }}
        >
          Go to Home
        </Button>
        <Button component={Link} to="/list" variant="outlined" size="large">
          View All URLs
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
