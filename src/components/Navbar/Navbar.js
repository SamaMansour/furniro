import React from "react";
import { Box, Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { SearchIcon, ChatIcon, InfoIcon, StarIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Flex p={4} bg="#FFFFFF" color="black" align="center">
      {/* Logo */}
      <img src={"../../assets/images/logo.png"}/>

      {/* Links */}
      <Spacer />
      <Flex>
        <Text px={4}>Home</Text>
        <Text px={4}>About</Text>
        <Text px={4}>Shop</Text>
        <Text px={4}>Contact</Text>
      </Flex>
      <Spacer />

      {/* Icons */}
      <IconButton aria-label="Search" icon={<SearchIcon />} bg="transparent" />
      <IconButton
        aria-label="Profile"
        icon={<InfoIcon />}
        bg="transparent"
        ml={2}
      />
      <IconButton
        aria-label="Wishlist"
        icon={<StarIcon />}
        bg="transparent"
        ml={2}
      />
      <IconButton
        aria-label="Cart"
        icon={<ChatIcon />}
        bg="transparent"
        ml={2}
      />
    </Flex>
  );
}

export default Navbar;
