import { Stack, Image, HStack, Text, Spacer, Box} from "@chakra-ui/react";

function Upcoming() {
  return (
    <Box p="20px" bg="#171717" mb="20px" borderRadius={"10px"}>
    <Stack direction={["column", "row"]}>
      <Box>
        <Image src="map.png" alt="Dan Abramov" />
      </Box>

      <Box pl="20px">
        <HStack>
          <Text color="#CFCFCF">Rate id:</Text>
          <Text color="white">002</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">Origin Station:</Text>
          <Text color="white">20</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">station_path:</Text>
          <Text color="white">[20, 39, 40, 42, 54, 63, 72, 88, 98]</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">Date:</Text>
          <Text color="white">15th Feb 2022 16:33</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">Distance :</Text>
          <Text color="white">0</Text>
        </HStack>
      </Box>
      <Spacer/>
      <Box>
        <HStack>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            City Name
          </Text>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            State Name
          </Text>
        </HStack>
      </Box>
    </Stack>
  </Box>
  )
}

export default Upcoming