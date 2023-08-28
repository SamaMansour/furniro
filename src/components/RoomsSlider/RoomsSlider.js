import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
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
    <Flex position="relative" maxWidth="100%" overflow="hidden" height="400px">
      {/* Left - Discover our collection */}
      <Flex
        width="50%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="rgba(0, 0, 0, 0.7)"
        color="white"
        p={4}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Discover our collection
        </Text>
        <Text fontSize="lg">50+ Beautiful rooms inspiration</Text>
      </Flex>

      {/* Right - Slider */}
      <Box width="50%">
        <Slider {...settings}>
          <Image
            src="../../assets/images/room1.png"
            alt="Room 1"
            width="100%"
          />
          <Image
            src="../../assets/images/room2.png"
            alt="Room 2"
            width="100%"
          />
          {/* Add more images as needed */}
        </Slider>
      </Box>
    </Flex>
  );
};

export default RoomsSlider;
