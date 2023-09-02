import React from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import ProductCard from "../../ProductCard/ProductCard";

const RelatedProducts = () => {
  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Related Products
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <ProductCard
          imageUrl="../../assets/images/product1.png"
          title="Product Name"
          description="Short product description."
          discount="green"
        />
        <ProductCard
          imageUrl="../../assets/images/product2.png"
          title="Product Name 2"
          description="Another product description."
        />
        <ProductCard
          imageUrl="../../assets/images/product3.png"
          title="Product Name 3"
          description="Yet another product description."
          discount="red"
        />
        <ProductCard
          imageUrl="../../assets/images/product4.png"
          title="Product Name 4"
          description="Fourth product description."
        />
      </Grid>

      <Button
        mt={4}
        colorScheme="white"
        size="lg"
        color="#B88E2F"
        border="1px solid #B88E2F"
        _hover={{ bg: "#B88E2F", color: "#FFFFFF" }}
      >
        Show More
      </Button>
    </Box>
  );
};

export default RelatedProducts;
