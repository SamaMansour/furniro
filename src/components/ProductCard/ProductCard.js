import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

const ProductCard = ({ imageUrl, title, description, discount }) => {
  return (
    <Box
      borderWidth="1px"
      overflow="hidden"
      bg="white"
      position="relative"
      width="100%"
    >
      <Image src={imageUrl} alt={title} height="80%" width="100%" />

      <Box p="4">
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text isTruncated>{description}</Text>
      </Box>

      {discount && (
        <Badge
          colorScheme={discount === "green" ? "green" : "red"}
          position="absolute"
          top="2"
          right="2"
          borderRadius="full"
          p="1"
        >
        50%
        </Badge>
      )}
    </Box>
  );
};

export default ProductCard;
