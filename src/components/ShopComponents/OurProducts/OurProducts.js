import React, { useState } from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import ProductCard from "../../ProductCard/ProductCard";

const TOTAL_PRODUCTS = 100;
const PRODUCTS_PER_PAGE = 8;
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        bgColor="#FFF3E3"
      >
        Previous
      </Button>
      <Box mx={4}>
        {currentPage} / {totalPages}
      </Box>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        bgColor="#FFF3E3"
      >
        Next
      </Button>
    </Box>
  );
};

const generateDummyProducts = () => {
  const dummyList = [];
  for (let i = 0; i < TOTAL_PRODUCTS; i++) {
    dummyList.push({
      imageUrl: "../../assets/images/product1.png",
      title: `Product Name ${i + 1}`,
      description: `Description for product ${i + 1}`,
      discount: i % 2 === 0 ? "green" : "red",
    });
  }
  return dummyList;
};

const products = generateDummyProducts();

const OurProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(TOTAL_PRODUCTS / PRODUCTS_PER_PAGE);

  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Our Products
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            discount={product.discount}
          />
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        pageCount={pageCount}
        mt={4}
      />
    </Box>
  );
};

export default OurProducts;
