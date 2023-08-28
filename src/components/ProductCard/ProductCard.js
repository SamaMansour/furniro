import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  Link,
  Flex,
  Center,
} from "@chakra-ui/react";

const ProductCard = ({ imageUrl, title, description, discount }) => {
  return (
    <Box
      borderWidth="1px"
      overflow="hidden"
      bg="white"
      position="relative"
      width="100%"
      _hover={{ ".overlay": { opacity: 1 } }}
      borderRadius="lg"
    >
      <Image src={imageUrl} alt={title} height="80%" width="100%" />

      <Box p="4">
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text isTruncated>{description}</Text>
      </Box>

      <Center
        className="overlay"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)"
        opacity="0"
        flexDirection="column"
        justifyContent="center"
        transition="opacity 0.2s"
      >
        <Button colorScheme="#FFFFFF" size="md" mb={2} color="#B88E2F" bgColor="#FFFFFF">
          Add to Cart
        </Button>
        <Flex justifyContent="center" spacing={4}>
          <Link color="white" fontWeight="semibold" mx={1}>
            Like
          </Link>
          <Link color="white" fontWeight="semibold" mx={1}>
            Share
          </Link>
          <Link color="white" fontWeight="semibold" mx={1}>
            Compare
          </Link>
        </Flex>
      </Center>

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
