import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>URL Shortener</RouterLink>
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/list">
            All URLs
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
