import React from "react";
import { Box, Text, IconButton, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const CartSidebar = ({ onClose }) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "../../assets/images/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      image: "../../assets/images/product2.png",
    },
  ];

  const handleDelete = (productId) => {
    // Handle product deletion, maybe using a state manager or API call
  };

  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <Box
      position="fixed"
      right="0"
      top="0"
      height="100vh"
      width="300px"
      bg="white"
      p={5}
    >
      {products.map((product) => (
        <Box
          key={product.id}
          border="1px solid #ddd"
          borderRadius="5px"
          p={4}
          m={2}
          d="flex"
          alignItems="center"
        >
          <img src={product.image} alt={product.name} width="50" />
          <Text flex="1" ml={3}>
            {product.name}
          </Text>
          <Text>${product.price}</Text>
          <IconButton
            aria-label="Delete product"
            icon={<CloseIcon />}
            onClick={() => handleDelete(product.id)}
          />
        </Box>
      ))}

      <Text fontSize="xl" fontWeight="bold" mt={5}>
        Total: ${total}
      </Text>
      <Button colorScheme="blue" mt={3} onClick={onClose}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartSidebar;
