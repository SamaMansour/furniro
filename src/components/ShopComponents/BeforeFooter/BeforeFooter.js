import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

const BeforeFooter = () => {
  // Sample Data
  const sections = [
    {
      header: "High Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "../../assets/images/vector.png",
    },
    {
      header: "Warenty Protection",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "../../assets/images/Group.png",
    },
    {
      header: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      imageUrl: "../../assets/images/shipping.png",
    },
    {
      header: "24/7 Support",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageUrl: "../../assets/images/customer-support.png",
    },
    
  ];

  return (
    <Box bg="#FFF3E3" p={8}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {sections.map((section, index) => (
          <VStack key={index} spacing={4} alignItems="start">
            <Heading size="md">{section.header}</Heading>
            <HStack spacing={4}>
              <Image
                boxSize="50px"
                src={section.imageUrl}
                alt={section.header}
              />
              <Text>{section.description}</Text>
            </HStack>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default BeforeFooter;
