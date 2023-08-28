import React from "react";
import { Box, Button, Grid, Text  } from "@chakra-ui/react";
import ProductCard from "../../ProductCard/ProductCard";
const OurProducts = () => {
  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Our Products
      </Text>
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
      <Grid templateColumns="repeat(4, 1fr)" gap={12}>
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

      <Button
        colorScheme="#FFFFFF"
        size="lg"
        mt={4}
        color="#B88E2F"
        border="1px solid #B88E2F"
      >
        Show More
      </Button>
    </Box>
  );
};

export default OurProducts;
