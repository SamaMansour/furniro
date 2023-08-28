import React from "react";
import { Box, Text, Flex, Image, VStack, Button } from "@chakra-ui/react";

const RoomsSlider = () => {
  return (
    <Box
      position="relative"
      maxWidth="100%"
      overflow="hidden"
      height="400px"
      bgColor="#FFF3E3"
    >
      <Flex direction="row" width="100%" height="100%" alignItems="center">
        {/* Left side: VStack with Text and Button */}
        <VStack flex="1" spacing={4} textAlign="left" pl="5%">
          <Text fontSize="5xl" fontWeight="bold">
            50+ Beautiful rooms inspiration
          </Text>
          <Text>
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </Text>
          <Button
            colorScheme="#B88E2F"
            size="lg"
            bgColor="#B88E2F"
            textAlign="left"
            position="relative"
            left="-35%"
          >
            Explore More
          </Button>
        </VStack>

        {/* Right side: Images */}
        <Box flex="1" position="relative">
          <Image
            src="../../assets/images/room1.png"
            alt="Image 1"
            position="absolute"
            top="20%" // Adjusted to be a bit lower
            left="10%"
            width="60%"
          />
          <Image
            src="../../assets/images/room2.png"
            alt="Image 2"
            position="absolute"
            top="5%" // Adjusted to be higher than room1
            left="50%"
            width="60%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RoomsSlider;
