import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

const ProductCard = ({ imageUrl, title, description, discount }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      position="relative"
      width="100%"
    >
      <Image src={imageUrl} alt={title} />

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
          {/* Optional: Put discount percentage or text here */}
        </Badge>
      )}
    </Box>
  );
};

export default ProductCard;
