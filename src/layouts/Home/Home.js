import React from 'react';
import DiscoverCollection from '../../components/DiscoverCollection/DiscoverCollection';
import BrowseTheRange from '../../components/BrowseTheRange/BrowseTheRange';
import { Box, Button, Text, VStack, Image, Flex } from "@chakra-ui/react";
import OurProducts from '../../components/OurProducts/OurProducts';

const Home = () => {
  return (
    <>
    <DiscoverCollection/>
    <BrowseTheRange/>
    <OurProducts/>
    </>
  );
}

export default Home