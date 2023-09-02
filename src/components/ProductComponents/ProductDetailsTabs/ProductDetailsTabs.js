import React from "react";
import { Box, Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

const ProductDetailsTabs = () => {
  return (
    <Box p={5} boxShadow="base" rounded="md">
      <Tabs variant="enclosed" colorScheme="blue">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Your product description goes here.</p>
          </TabPanel>
          <TabPanel>
            <p>Your additional information about the product goes here.</p>
          </TabPanel>
          <TabPanel>
            <p>Your product reviews go here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductDetailsTabs;
