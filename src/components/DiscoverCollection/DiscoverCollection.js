import React from "react";
import { Box, Button, Text, VStack, Image, Flex } from "@chakra-ui/react";

const DiscoverCollection = () => {
  return (
    <Box position="relative">
      {/* The Image */}
      <Image
        src="../../assets/images/layer.jpg"
        alt="Collection Image"
        width="100%"
      />

      {/* Overlay content */}
      <Flex
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        alignItems="flex-start"
        justifyContent="flex-end"
        bg="rgba(0, 0, 0, 0.4)" // A slight dark overlay for text visibility
      >
        <Box
          width="50%"
          height="80%" // Half the width of the parent (image)
          p={4}
          bg="rgba(255, 255, 255, 0.8)"
          mt={4}
          mr={4}
          boxShadow="2px 2px 15px rgba(0, 0, 0, 0.5)" // 3D shadow effect
          border="2px solid black" // Sharp edge effect
        >
          <VStack spacing={4} textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              Discover our new collection
            </Text>
            <Button colorScheme="teal" size="lg">
              Shop Now
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default DiscoverCollection;
