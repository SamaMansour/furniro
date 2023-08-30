import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const FurnitureSection = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Furniro Furniture
      </Text>

      <Flex justifyContent="space-between">
        <Image src="../../assets/images/pic1.png" alt="Furniture 1" mb={-4} />{" "}
        {/* Negative margin to overlap */}
        <Image
          src="../../assets/images/pic3.png"
          alt="Furniture 3"
          mb={-4}
        />{" "}
        {/* Negative margin to overlap */}
        <Image src="../../assets/images/pic5.png" alt="Furniture 5" />
      </Flex>
      
    </Box>
  );
};

export default FurnitureSection;
