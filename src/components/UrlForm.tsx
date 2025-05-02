import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { encodeUrl } from "../api/urlService";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSnackbar } from "notistack";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation({
    mutationFn: (originalUrl: string) => encodeUrl(originalUrl),
    onSuccess: (data) => {
      setShortUrl(data.shortUrl);
      queryClient.invalidateQueries({ queryKey: ["urls"] });
      enqueueSnackbar("URL shortened successfully!", { variant: "success" });
    },
    onError: () => {
      enqueueSnackbar("Error shortening URL", { variant: "error" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    enqueueSnackbar("Copied to clipboard!", { variant: "success" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <TextField
        fullWidth
        label="Enter URL to shorten"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        type="url"
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" disabled={mutation.isPending}>
        {mutation.isPending ? "Shortening..." : "Shorten URL"}
      </Button>

      {shortUrl && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Short URL:</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Link href={shortUrl} target="_blank" rel="noopener">
              {shortUrl}
            </Link>
            <Button
              onClick={copyToClipboard}
              startIcon={<ContentCopyIcon />}
              sx={{ ml: 2 }}
            >
              Copy
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UrlForm;
