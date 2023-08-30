import React from 'react';
import DiscoverCollection from '../../components/HomeComponents/DiscoverCollection/DiscoverCollection';
import BrowseTheRange from '../../components/HomeComponents/BrowseTheRange/BrowseTheRange';
import { Box, Button, Text, VStack, Image, Flex } from "@chakra-ui/react";
import OurProducts from '../../components/HomeComponents/OurProducts/OurProducts';
import RoomsSlider from '../../components/HomeComponents/RoomsSlider/RoomsSlider';
import FurnitureSection from '../../components/HomeComponents/FurniroFurniture/FurniroFurniture';

const Home = () => {
  return (
    <>
    <DiscoverCollection/>
    <BrowseTheRange/>
    <OurProducts/>
    <RoomsSlider/>
    <FurnitureSection/>
    </>
  );
}

export default Home