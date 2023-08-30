import React from "react";
import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Link,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const bgColor = "#FFFFFF";
  const color = useColorModeValue("gray.700", "gray.200");

  return (
    <Box as="footer" bgColor={bgColor} color={color} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        px={4}
        wrap="wrap"
      >
        <Box mb={4}>
          <Text fontSize="xl" mb={2}>
            <img src="../../assets/images/Funiro.png" alt="Furniro Logo" />
          </Text>
          <Text>400 University Drive Suite 200 Coral Gables, FL 33134 USA</Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} mb={4}>
          {[1, 2].map((num) => (
            <List spacing={3} key={num} ml={num !== 1 && 6}>
              <ListItem>
                <Link href="#">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Shop</Link>
                <ListItem>
                  <Link href="#">About</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Contact</Link>
                </ListItem>
              </ListItem>
            </List>
          ))}
        </Flex>

        <Box>
          <Text mb={2}>Subscribe to our newsletter:</Text>
          <Flex>
            <Input placeholder="Enter your email" variant="outline" mr={2} />
            <Button colorScheme="teal" type="submit">
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
