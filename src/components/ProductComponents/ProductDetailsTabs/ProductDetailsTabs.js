import React from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const ProductDetailsTabs = () => {
  const image1Src = "../../assets/images/picture1.png"; // replace with your image path
  const image2Src = "../../assets/images/picture1.png"; // replace with your image path
  const longDescription =
    "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, \n unplugs the chords, and takes the show on the road.\n Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.";

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
            <Text fontSize="md" mb={5}>
              {longDescription}
            </Text>

            <SimpleGrid columns={2} spacing={5}>
              <Image src={image1Src} alt="Detailed Image 1" />
              <Image src={image2Src} alt="Detailed Image 2" />
            </SimpleGrid>
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
