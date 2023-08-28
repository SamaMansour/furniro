import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoomsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box position="relative" maxWidth="100%" overflow="hidden" height="400px">
      {/* Slider */}
      

      {/* Discover Collection Box on the Left */}
      <Flex
        position="absolute"
        top="20%"
        left="5%"
        flexDirection="column"
        width="30%"
        p={4}
        bg="rgba(255, 255, 255, 0.8)"
        boxShadow="2px 2px 15px rgba(0, 0, 0, 0.5)" // 3D shadow effect
        border="2px solid #FFF3E3" // Sharp edge effect
        bgColor="#FFF3E3"
      >
        <VStack spacing={4} textAlign="left">
          <Text fontSize="2xl" fontWeight="bold" color="#B88E2F">
            Discover our rooms
          </Text>
          <Text>50+ Beautiful rooms inspiration</Text>
        </VStack>
      </Flex>

      {/* Floating Images in a Zigzag Pattern */}
   
      <Image
        src="../../assets/images/room1.png"
        alt="Floating Image 1"
        position="absolute"
        top="10%"
        right="20%"
        width="10%"
      />
      <Image
        src="../../assets/images/room2.png"
        alt="Floating Image 2"
        position="absolute"
        top="30%"
        right="10%"
        width="10%"
      />
    
    </Box>
  );
};

export default RoomsSlider;
