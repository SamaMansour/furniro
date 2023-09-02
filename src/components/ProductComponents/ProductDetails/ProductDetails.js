import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Circle,
  ButtonGroup,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";

const ProductDetails = () => {
  // Sample data for the product
  const product = {
    images: {
      front: "../../assets/images/cap1.png",
      back: "../../assets/images/cap2.png",
      side: "../../assets/images/cap3.png",
    },
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"],
  };

  // States
  const [mainImage, setMainImage] = useState("../../assets/images/main.png");
  const [count, setCount] = useState(1);

  return (
    <SimpleGrid columns={3} spacing={5}>
      <Box>
        {Object.values(product.images).map((img, index) => (
          <Image
            key={index}
            src={img}
            mb={4}
            cursor="pointer"
            onClick={() => setMainImage(img)}
          />
        ))}
      </Box>

      <Box ml={-300}>
        <Image src={mainImage} width="400px" height="500px" objectFit="cover" />
      </Box>

      <Box ml={-300}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Product Description
        </Text>
        <Text mb={4}>{product.description}</Text>

        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Available Sizes:
        </Text>
        <ButtonGroup spacing={2} mb={4}>
          {product.sizes.map((size) => (
            <Button key={size} variant="outline">
              {size}
            </Button>
          ))}
        </ButtonGroup>

        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Available Colors:
        </Text>
        <SimpleGrid columns={3} spacing={2} mb={4}>
          {product.colors.map((color, index) => (
            <Circle key={index} size="40px" bgColor={color} />
          ))}
        </SimpleGrid>

        <Flex alignItems="center" justifyContent="space-between" mb={4}>
          <Flex>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              -
            </Button>
            <Input
              readOnly
              value={count}
              size="sm"
              width="50px"
              textAlign="center"
              mx={2}
            />
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </Flex>
          <ButtonGroup>
            <Button colorScheme="green">Add to Cart</Button>
            <Button colorScheme="teal">Compare</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default ProductDetails;
