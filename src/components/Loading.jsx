import { CircularProgress, Box } from '@mui/material';

function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color='inherit' />
    </Box>
  );
}

export default Loading;
