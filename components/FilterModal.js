import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";


function FilterModal({
  onOpen,
  onClose,
  isOpen,
  rides,
  onChangeState,
  onChangeCity,
  stateValue,
  cityValue,
}) {

  // const sortingCity = (a, b) => {
  //   if (a.city < b.city) {
  //     return -1;
  //   }
  //   if (a.city > b.city) {
  //     return 1;
  //   }
  //   return 0;
  // };

  // const sortedCity = cities.sort(sortingCity);

  // console.log("city", sortedCity);


  const sortState = (a, b) => {
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    return 0;
  };

  const stateSort = rides.sort(sortState);
  // console.log("state", stateSort);





  return (
    <>
      <Modal size={"xs"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton bg="red" />
          <ModalBody mt="35px">
            <Text mb="10px" color="#A5A5A5">
              Filters
            </Text>
            <Divider mb="10px" />
            <Select
              onChange={onChangeState}
              value={stateValue}
              bg={"#101010"}
              color="orange"
              mb="10px"
              placeholder="State"
            >
              {stateSort.map((ride, i) => {
                return (
                  <option value={ride.state} key={i}>
                    {ride.state}
                  </option>
                );
              })}
            </Select>
            <Select
              value={cityValue}
              onChange={onChangeCity}
              color={"orange"}
              bg="#101010"
              mb="10px"
              placeholder="City"
            >
              {rides.map((ride, i) => {
                return (
                  <option value={ride.city} color="black" key={i}>
                    {ride.city}
                  </option>
                );
              })}
            </Select>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal;
