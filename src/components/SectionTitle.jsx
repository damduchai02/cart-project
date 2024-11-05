import { Box, Typography } from '@mui/material';

function SectionTitle({ text }) {
  return (
    <Box component='section' sx={{ paddingX: 3 }}>
      <Typography variant='h4'>{text}</Typography>
    </Box>
  );
}

export default SectionTitle;
