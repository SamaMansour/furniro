import React from "react";
import { Box, Text, Grid, Image } from "@chakra-ui/react";

const BrowseTheRange = () => {
  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Browse the Range
      </Text>
      <Text mb={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box>
          <Image src="../../assets/images/dining.png" alt="Dining" />
          <Text fontSize="xl" fontWeight="semibold" textAlign="center" mt={2}>
            Dining
          </Text>
        </Box>

        <Box>
          <Image src="../../assets/images/living.png" alt="Living" />
          <Text fontSize="xl" fontWeight="semibold" textAlign="center" mt={2}>
            Living
          </Text>
        </Box>

        <Box>
          <Image src="../../assets/images/bedroom.png" alt="Bedroom" />
          <Text fontSize="xl" fontWeight="semibold" textAlign="center" mt={2}>
            Bedroom
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default BrowseTheRange;
