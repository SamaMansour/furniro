import React from "react";
import { Box, Button, Grid } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
const OurProducts = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <ProductCard
          imageUrl="../../assets/images/product1.png"
          title="Product Name"
          description="Short product description."
          discount="green"
        />
        <ProductCard
          imageUrl="../../assets/images/product1.png"
          title="Product Name 2"
          description="Another product description."
        />
        <ProductCard
          imageUrl="../../assets/images/product1.png"
          title="Product Name 3"
          description="Yet another product description."
          discount="red"
        />
        <ProductCard
          imageUrl="../../assets/images/product1.png"
          title="Product Name 4"
          description="Fourth product description."
        />
      </Grid>

      <Button colorScheme="teal" size="lg" mt={4}>
        Show More
      </Button>
    </Box>
  );
};

export default OurProducts;
