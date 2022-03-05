import { Stack, Image, HStack, Text, Spacer, Box } from "@chakra-ui/react";

function Nearest({
  path,
  user,
  ride
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
      <Box w={{ base: "100%", md: "250px" }}>
        <Image w={"100%"} src={ride.map_url} alt="Dan Abramov" />
      </Box>

      <Box pl={{ base: "0px", md: "20px" }}>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Rate id:</Text>
          <Text color="white">{ride.id}</Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Origin Station:</Text>
          <Text color="white">{ride.origin_station_code}</Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">station_path:</Text>

          <Text color="white">
            [
            {ride.station_path.map((p) =>
              p === path[path.length - 1] ? `${p}` : `${p}, `
            )}
            ]
          </Text>
        </HStack>
        <HStack mb={{ base: "20px", md: "30px" }}>
          <Text color="#CFCFCF">Date:</Text>
          <Text color="white">{ride.date}</Text>
        </HStack>
        <HStack>
          <Text color="#CFCFCF">Distance :</Text>
          <Text color="white">{ride.distance}</Text>
        </HStack>
      </Box>
      <Spacer />
      <Box pt={{ base: "20px", md: "0px" }}>
        <HStack>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            {ride.city}
          </Text>
          <Text
            p="5px"
            borderRadius={"16px"}
            color="#FFFFFF"
            border="1px solid #000000"
          >
            {ride.state}
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}

export default Nearest;
