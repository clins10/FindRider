import {
  Avatar,
  Box,
  HStack,
  Spacer,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  WrapItem,
  TabPanels,
  TabPanel,
  useDisclosure,
  Center,
  Button,
  LinkBox,
  Link,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import Nearest from "./components/Nearest";
import PastRides from "./components/PastRides";
import UpcomingRides from "./components/UpcomingRides";
import FilterModal from "./components/FilterModal";
import React, { useEffect, useState } from "react";

export default function Home({ rides, user }) {


  const { isOpen, onOpen, onClose } = useDisclosure();
  let [nearest, setNearest] = useState(rides);
  const [pastrides, setPastrides] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [tab, setTab] = useState("nearest");

  let date = new Date().getTime();

  let get_upcomingRides = rides.filter((ride) => {
    return new Date(ride.date).valueOf() > date;
  });

  get_upcomingRides = get_upcomingRides.map((ride) => {
    //removing paths that are lesser than user's station code
    let stationPath = ride.station_path.filter((path) => {
      return path >= user.station_code;
    });

    let distance = stationPath[0] - user.station_code;
    return {
      distance: distance,
      ...ride,
    };
  });

  //PAST RIDE STARTS
  let get_pastrides = rides.filter((ride) => {
    return new Date(ride.date).valueOf() < date;
  });

  get_pastrides = get_pastrides.map((ride) => {
    //removing paths that are lesser than user's station code
    let stationPath = ride.station_path.filter((path) => {
      return path >= user.station_code;
    });

    let distance = stationPath[0] - user.station_code;
    return {
      distance: distance,
      ...ride,
    };
  });

  //PAST RIDE ENDS

  let near = nearest.filter((ride) => {
    return ride.station_path.some((num) => {
      return num > user.station_code;
    });
  });

  //calculating the distance
  near = near.map((ride) => {
    //removing paths that are lesser than user's station code
    let stationPath = ride.station_path.filter((path) => {
      return path >= user.station_code;
    });

    let distance = stationPath[0] - user.station_code;
    return {
      distance: distance,
      ...ride,
    };
  });

  // sorting the nearest so the closest rides show up first

  nearest = near.sort(
    (lowest_distance, highest_distance) =>
      lowest_distance.distance - highest_distance.distance
  );
  // setNearest(near)

  const handleCity = (e) => {
    let value = e.target.value;
    if (value.length && state.length) {
      if (tab === "nearest") {
        setCity(value);
        nearest = rides.filter((ride) => {
          return ride.city === value && ride.state === state;
        });

        setNearest(nearest);
      } else if (tab === "past") {
        setCity(value);
        let pasts = pastrides.filter((ride) => {
          return ride.city === value && ride.state === state;
        });
        // alert("got here")
        setPastrides(pasts);
      } 
      // else {
      //   setCity(value);
      //   let upcome = upComing.filter((ride) => {
      //     return ride.city === value && ride.state === state;
      //   });
      //   setUpComing(upcome);
      // }
    } else if (value.length && !state.length) {
      if (tab === "nearest") {
        setCity(value);
        nearest = rides.filter((ride) => {
          return ride.city === value;
        });
        
        setNearest(nearest);
      } else if (tab === "past") {
        setCity(value);
        let pasts = pastrides.filter((ride) => {
          return ride.city === value;
        });
        // alert("got here")
        setPastrides(pasts);
      } 
      // else {
      //   setCity(value);
      //   let upcome = upComing.filter((ride) => {
      //     return ride.city === value;
      //   });
      //   setUpComing(upcome);
      // }
    } else if (!value.length && state.length) {
      if (tab === "nearest") {
        setCity("");
        nearest = rides.filter((ride) => {
          return ride.state === state;
        });
        setNearest(nearest);
      } else if (tab === "past") {
        setCity("");
        let pasts = pastrides.filter((ride) => {
          return ride.state === state;
        });
        setPastrides(pasts);
        // alert("no city, but there is state")
      } 
      // else {
      //   setCity("");
      //   let upcome = upComing.filter((ride) => {
      //     return ride.state === state;
      //   });
      //   setUpComing(upcome);
      // }
    } else {
      setNearest(nearest);
      setPastrides(get_pastrides);
      setUpComing(get_upcomingRides);
    }

    console.log("length of city value", value.length);
    console.log("length of state value", state.length);
  };

  const handleState = (e) => {
    let value = e.target.value;

    if (value.length && city.length) {
      if (tab === "nearest") {
        setState(value);
        nearest = rides.filter((ride) => {
          return ride.state === value && ride.city === city;
        });
        setNearest(nearest);
      } else if (tab === "past") {
        setState(value);
       let pasts = pastrides.filter((ride) => {
          return ride.state === value && ride.city === city;
        });
        setPastrides(pasts);
      } 
      // else {
      //   setState(value);
      //   let upcome = upComing.filter((ride) => {
      //     return ride.state === value && ride.city === city;
      //   });
      //   setUpComing(upcome);
      // }
    } else if (value.length && !city.length) {
      if (tab === "nearest") {
        setState(value);
        nearest = rides.filter((ride) => {
          return ride.state === value;
        });
        setNearest(nearest);
      } else if (tab === "past") {
        setState(value);
        let pasts = pastrides.filter((ride) => {
          return ride.state === value;
        });
        setPastrides(pasts);
      } 
      // else {
      //   setState(value);
      //   let upcome = upComing.filter((ride) => {
      //     return ride.state === value;
      //   });
      //   setUpComing(upcome);
      // }
    } else if (!value.length && city.length) {
      if (tab === "nearest") {
        setState("");
        nearest = rides.filter((ride) => {
          return ride.city === city;
        });
        setNearest(nearest);
      } else if (tab === "past") {
        setState("");
        let pasts = pastrides.filter((ride) => {
          return ride.city === city;
        });
        setPastrides(pasts);
      } else {
        setState("");
        let upcome = upComing.filter((ride) => {
          return ride.city === city;
        });
        setUpComing(upcome);
      }
    } else {
      setNearest(rides);
      setPastrides(get_pastrides);
      setUpComing(get_upcomingRides);
    }

    console.log("length of city value", city.length);
    console.log("length of state value", value.length);
  };

  // console.log("tab", tab);

  useEffect(() => {
    setPastrides(get_pastrides);
    setUpComing(get_upcomingRides);
  },);
  return (

    <Box>
    <FilterModal
      rides={rides}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onChangeCity={handleCity}
      onChangeState={handleState}
      cityValue={city}
      stateValue={state}
    />
    <Stack p="20px" bg={"#101010"} direction={["row", "row"]}>
      <Box>
        <Text color={"white"} fontSize="36px" fontWeight="bold">
          Edvora
        </Text>
      </Box>

      <Spacer />
      <HStack>
        <Text color="white" fontSize={"20px"} fontWeight="bold">
          {user.name}

          {/* {user.station_code} */}
        </Text>
        <WrapItem>
          <Avatar size={"sm"} name="Dan Abrahmov" src={user.url} />
        </WrapItem>
      </HStack>
    </Stack>
    <Box bg="rgb(41 41 41)">
      <Stack>
        <Tabs variant="unstyled">
          <TabList w="100%">
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(41 41 41)",
                borderBottom: "1px solid white",
              }}
              color={"#D0CBCB"}
              fontSize="18px"
              fontWeight={"700"}
              onClick={() => setTab("nearest")}
            >
              Nearest rides
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(41 41 41)",
                borderBottom: "1px solid white",
              }}
              color={"#D0CBCB"}
              fontSize="18px"
              fontWeight={"700"}
              onClick={() => setTab("upcoming")}
            >
              Upcoming rides ({upComing.length})
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(41 41 41)",
                borderBottom: "1px solid white",
              }}
              color={"#D0CBCB"}
              fontSize="18px"
              fontWeight={"700"}
              onClick={() => setTab("past")}
            >
              Past rides ({pastrides.length})
            </Tab>
            <Spacer />
            <HStack onClick={onOpen} mr="20px" cursor={"pointer"}>
              <BiMenuAltLeft color="white" size={"40px"} />
              <Text
                display={{ base: "none", md: "block" }}
                color="white"
                fontSize={"15px"}
                fontWeight="500"
              >
                Filters
              </Text>
            </HStack>
          </TabList>

          <TabPanels>
            <TabPanel>
              {nearest.length ? (
                nearest.map((ride, index) => {
                  return (
                    <Nearest
                      key={index}
                      id={ride.id}
                      date={ride.date}
                      map_pc={ride.map_url}
                      origin_station={ride.origin_station_code}
                      destination={ride.destination_station_code}
                      path={ride.station_path}
                      user={user}
                      distance={ride.distance}
                      city_name={ride.city}
                      state_name={ride.state}
                    />
                  );
                })
              ) : (
                <>
                  <Center>
                    <Text fontSize={"3xl"} color="white">
                      Oops, there are no rides nearer, Kindly exercise
                      patience.
                    </Text>
                  </Center>
                  <Center>
                    <LinkBox mt="20px" as={Link} href="/">
                      <Button
                        color="white"
                        size="md"
                        height="48px"
                        bg={"teal"}
                        width="200px"
                        border="2px"
                        borderColor="green.500"
                        // _hover={"teal"}
                      >
                        Refresh Page
                      </Button>
                    </LinkBox>
                  </Center>
                </>
              )}
            </TabPanel>
            <TabPanel>
              {upComing.length ? (
                upComing.map((upcoming_ride, i) => {
                  return (
                    <UpcomingRides
                      key={i}
                      id={upcoming_ride.id}
                      date={upcoming_ride.date}
                      map_pc={upcoming_ride.map_url}
                      origin_station={upcoming_ride.origin_station_code}
                      destination={upcoming_ride.destination_station_code}
                      path={upcoming_ride.station_path}
                      user={user}
                      distance={upcoming_ride.distance}
                      city_name={upcoming_ride.city}
                      state_name={upcoming_ride.state}
                    />
                  );
                })
              ) : (
                <>
                  <Center color="white">
                    <Text color="white" fontSize={"3xl"}>
                      {" "}
                      There are no Upcoming rides
                    </Text>
                  </Center>
                  <Center>
                    <LinkBox mt="20px" as={Link} href="/">
                      <Button
                        color="white"
                        size="md"
                        height="48px"
                        bg={"teal"}
                        width="200px"
                        border="2px"
                        borderColor="green.500"
                        // _hover={"teal"}
                      >
                        Refresh Page
                      </Button>
                    </LinkBox>
                  </Center>
                </>
              )}
            </TabPanel>
            <TabPanel>
              {pastrides.length ? (
                pastrides.map((pastride, i) => {
                  return (
                    <PastRides
                      key={i}
                      id={pastride.id}
                      date={pastride.date}
                      map_pc={pastride.map_url}
                      origin_station={pastride.origin_station_code}
                      destination={pastride.destination_station_code}
                      path={pastride.station_path}
                      user={user}
                      distance={pastride.distance}
                      city_name={pastride.city}
                      state_name={pastride.state}
                    />
                  );
                })
              ) : (
                <>
                  <Center>
                    <Text color="white" fontSize={"3xl"}>
                      There are no past rides
                    </Text>
                  </Center>
                  <Center>
                    <LinkBox mt="20px" as={Link} href="/">
                      <Button
                        color="white"
                        size="md"
                        height="48px"
                        bg={"teal"}
                        width="200px"
                        border="2px"
                        borderColor="green.500"
                        // _hover={"teal"}
                      >
                        Refresh Page
                      </Button>
                    </LinkBox>
                  </Center>
                </>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      {/* </HStack> */}
    </Box>
  </Box>
     
  )
}


export async function getStaticProps(context) {
  const res = await fetch("https://assessment.api.vweb.app/rides");
  const resUser = await fetch("https://assessment.api.vweb.app/user");
  const rides = await res.json();
  const user = await resUser.json();

  return {
    props: {
      rides,
      user,
    },
  };
}
