import React from "react";
import { Box, Flex, Select, Input, IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const FilterBar = () => {
  return (
    <Flex
      p={4}
      boxShadow="md"
      rounded="lg"
      alignItems="center"
      bgColor="#FFF3E3"
    >
      {/* Filter Icon */}
      <IconButton aria-label="Filter" icon={<Search2Icon />} mr={4} />

      {/* Shown Results Field */}
      <Input
        placeholder="Shown results..."
        variant="outline"
        width="2xs"
        mr={4}
      />

      {/* Sort By Dropdown */}
      <Select placeholder="Sort By" width="xs" mr={4}>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="price">Price</option>
      </Select>
    </Flex>
  );
};

export default FilterBar;
