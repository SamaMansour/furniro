import React from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


const Dimensions = () => {
  return (
    <Box p={5}>
      {/* General Header */}
      <Text fontSize="xl" fontWeight="bold" mb={5} textAlign="left">
        Dimensions
      </Text>

      {/* Table */}
      <Table variant="unstyled" size="md">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <Tr key={rowIndex}>
              <Td>Row {rowIndex + 1} Data 1</Td>
              <Td>Row {rowIndex + 1} Data 2</Td>
              <Td>Row {rowIndex + 1} Data 3</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

}

export default Dimensions