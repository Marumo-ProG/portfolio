import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: Lennythobejane@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Marumo-ProG",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/thobejanemarumo/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((social, index) => {
              return (
                <a key={index} href={social.url} target={"_blank"}>
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="2x"
                    style={{ marginRight: "20px" }}
                  />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects">
                My personal projects{" "}
                <FontAwesomeIcon icon={faGithub} size={"1x"} />
              </a>
              <a href="#contact">
                Connect with me{" "}
                <FontAwesomeIcon icon={faEnvelope} size={"1x"} />
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
