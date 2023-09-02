// CartSidebar.js
import React from "react";
import { Box, CloseButton } from "@chakra-ui/react";

const CartSidebar = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      right={0}
      top={0}
      height="100%"
      width="300px"
      bg="white"
      boxShadow="lg"
      zIndex="modal"
    >
      <CloseButton onClick={onClose} />
      {/* Your cart sidebar content goes here */}
      Cart Items...
    </Box>
  );
};

export default CartSidebar;
