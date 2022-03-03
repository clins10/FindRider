import { Stack, Image, HStack, Text, Spacer, Box } from "@chakra-ui/react";

function Nearest({
  id,
  map_pc,
  path,
  date,
  origin_station,
  user,
  distance,
  city_name,
  state_name,
}) {
  return (
    <Stack
    flexWrap={"wrap"}
      p="20px"
      bg="#171717"
      mb="20px"
      borderRadius={"10px"}
      direction={["column", "row"]}
    >
      <Box w={{base: "100%", md: "250px"}}>
        <Image
          w={"100%"}
          src={map_pc}
          alt="Dan Abramov"
        />
      </Box>

      <Box pl={{ base: "0px", md: "20px" }}>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Rate id:</Text>
          <Text color="white">{id}</Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Origin Station:</Text>
          <Text color="white">{origin_station}</Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">station_path:</Text>

          <Text color="white">
            [
            {path.map((p) => (p === path[path.length - 1] ? `${p}` : `${p}, `))}
            ]
          </Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Date:</Text>
          <Text color="white">{date}</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">Distance :</Text>
          <Text color="white">{distance}</Text>
        </HStack>
      </Box>
      <Spacer />
      <Box pt={{base: "20px", md: "0px"}}>
        <HStack>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            {city_name}
          </Text>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            {state_name}
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}

export default Nearest;
