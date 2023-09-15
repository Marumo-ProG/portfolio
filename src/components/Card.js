import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      width={"400px"}
      height={"500px"}
      style={{ backgroundColor: "white", color: "black", borderRadius: 10 }}
    >
      <img
        alt={"meta course project"}
        src={imageSrc}
        style={{ borderRadius: 10 }}
      />
      <Heading as={"h5"} size={"md"}>
        {title}
      </Heading>
      <br />
      <Heading as={"p"} size={"sm"} textAlign="center" paddingX={4}>
        {description}
      </Heading>
      <br />
      <Heading
        as={"a"}
        href={"#"}
        size={"xs"}
        textAlign={"start"}
        color={"green"}
      >
        see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Heading>
    </VStack>
  );
};

export default Card;
