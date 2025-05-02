import { useQuery } from '@tanstack/react-query';
import { getAllUrls, searchUrls } from '../api/urlService';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Link,
  Box,
} from '@mui/material';

const UrlList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: urls, isLoading, error } = useQuery({
    queryKey: ['urls', searchQuery],
    queryFn: () => (searchQuery ? searchUrls(searchQuery) : getAllUrls()),
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading URLs</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        fullWidth
        label="Search URLs (min 3 characters)"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Original URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Clicks</TableCell>
              <TableCell>Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls?.map((url) => (
              <TableRow key={url.shortCode}>
                <TableCell>
                  <Link href={url.originalUrl} target="_blank" rel="noopener">
                    {url.originalUrl}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={url.shortUrl} target="_blank" rel="noopener">
                    {url.shortUrl}
                  </Link>
                </TableCell>
                <TableCell>{url.clickCount}</TableCell>
                <TableCell>{new Date(url.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UrlList;