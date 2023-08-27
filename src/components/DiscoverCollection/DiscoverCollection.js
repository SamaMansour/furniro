import React from "react";
import { Box, Button, Text, VStack, Image, Center } from "@chakra-ui/react";

const DiscoverCollection = () => {
  return (
    <Box position="relative">
      {/* The Image */}
      <Image src="path_to_your_image.jpg" alt="Collection Image" width="100%" />

      {/* Overlay content */}
      <Center
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.4)" // A slight dark overlay for text visibility
      >
        <VStack spacing={4} textAlign="center" p={4}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Discover our new collection
          </Text>
          <Button colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default DiscoverCollection;
