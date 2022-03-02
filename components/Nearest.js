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
  //   let stationPath = path.filter((p) => {
  //     return p >= user.station_code;
  //   });

  return (
    <Box p="20px" bg="#171717" mb="20px" borderRadius={"10px"}>
      <Stack direction={["column", "row"]}>
        <Box>
          <Image src={map_pc} alt="Dan Abramov" />
        </Box>

        <Box pl="20px">
          <HStack  mb="15px">
            <Text color="#CFCFCF">Rate id:</Text>
            <Text color="white">{id}</Text>
          </HStack>
          <HStack mb="15px">
            <Text color="#CFCFCF">Origin Station:</Text>
            <Text color="white">{origin_station}</Text>
          </HStack>
          <HStack mb="15px">
            <Text color="#CFCFCF">station_path:</Text>

            <Text color="white">
              [
              {path.map((p) =>
                
                p === path[path.length - 1] ? `${p}` : `${p}, `
              )}
              ]
              {/* [
              {path.map((p) =>
                p === path[path.length - 1] ? `${p}` : `${p}, `
              )}
              ] */}
            </Text>
          </HStack>
          <HStack mb="15px">
            <Text color="#CFCFCF">Date:</Text>
            <Text color="white">{date}</Text>
          </HStack>
          <HStack>
            <Text color="#CFCFCF">Distance :</Text>
            <Text color="white">{distance}</Text>
            {/* <Text color="white">{stationPath[0] - user.station_code}</Text> */}
          </HStack>
        </Box>
        <Spacer />
        <Box>
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
    </Box>
  );
}

export default Nearest;
