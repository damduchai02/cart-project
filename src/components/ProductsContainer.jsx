import { Box, Typography } from '@mui/material';
import ProductGrid from './ProductsGrid';

function ProductsContainer() {
  return (
    <>
      <Box
        sx={{ borderBottom: 1, paddingBottom: 1, marginBottom: 4, paddingX: 3 }}
      >
        <Typography variant='h4'>9 products</Typography>
      </Box>
      <ProductGrid />
    </>
  );
}

export default ProductsContainer;
