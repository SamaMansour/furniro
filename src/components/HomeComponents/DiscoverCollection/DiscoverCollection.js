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
        height="80%"
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
          height="50%" // Half the width of the parent (image)
          p={4}
          bg="rgba(255, 255, 255, 0.8)"
          mt={4}
          mr={4}
          boxShadow="2px 2px 15px rgba(0, 0, 0, 0.5)" // 3D shadow effect
          border="2px solid #FFF3E3" // Sharp edge effect
          bgColor="#FFF3E3"
          marginTop="20%"
        >
          <VStack spacing={4} textAlign="left">
            <Text fontSize="5xl" fontWeight="bold" color="#B88E2F">
              Discover our new collection
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </Text>
            <Button colorScheme="#B88E2F" size="lg" bgColor="#B88E2F">
              Shop Now
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default DiscoverCollection;
