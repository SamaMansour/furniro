import React, { useState } from "react";
import { Flex, Text, IconButton, Spacer } from "@chakra-ui/react";
import { SearchIcon, ChatIcon, InfoIcon, StarIcon } from "@chakra-ui/icons";
import CartSidebar from "../CartSidebar/CartSidebar"; // Ensure the path is correct

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <>
      <Flex p={4} bg="#FFFFFF" color="black" align="center">
        <img alt="Logo" src={"../../assets/images/logo.png"} />

        <Spacer />

        <Flex>
          <Text px={4}>Home</Text>
          <Text px={4}>About</Text>
          <Text px={4}>Shop</Text>
          <Text px={4}>Contact</Text>
        </Flex>

        <Spacer />

        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          bg="transparent"
        />
        <IconButton
          aria-label="User information"
          icon={<InfoIcon />}
          bg="transparent"
          ml={2}
        />
        <IconButton
          aria-label="Favorites"
          icon={<StarIcon />}
          bg="transparent"
          ml={2}
        />
        <IconButton
          aria-label="Shopping Cart"
          icon={<ChatIcon />}
          bg="transparent"
          ml={2}
          onClick={handleCartToggle}
        />
      </Flex>

      {showCart && <CartSidebar onClose={handleCartToggle} />}
    </>
  );
}

export default Navbar;
