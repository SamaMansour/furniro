import { Box, Image, Text, SimpleGrid, Circle } from "@chakra-ui/react";

function ProductDetails() {
  // Dummy data for the product
  const product = {
    images: {
      front: "../../assets/images/cap1.png",
      back: "../../assets/images/cap2.png",
      side: "../../assets/images/cap3.png",
    },
    description:
      "This is a sample product description that showcases the product’s features and benefits.",
    availableColors: ["#816DFA", "#000000", "#B88E2F"],
  };

  return (
    <SimpleGrid columns={3} spacing={5}>
      {/* Product Images */}
      <Box>
        <Image src={product.images.front} alt="Front View" mb={4} />
        <Image src={product.images.back} alt="Back View" mb={4} />
        <Image src={product.images.side} alt="Side View" />
      </Box>

      {/* Main Product Image with adjusted margin to bring it closer */}
      <Box ml={-300}>
        <Image src="../../assets/images/main.png" alt="Main Product" />
      </Box>

      {/* Product Description and Colors */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Product Description
        </Text>
        <Text mb={4}>{product.description}</Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Available Colors:
        </Text>
        <SimpleGrid columns={3} spacing={2}>
          {product.availableColors.map((color, index) => (
            <Circle key={index} size="40px" bgColor={color} />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default ProductDetails;
