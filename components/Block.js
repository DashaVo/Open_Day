import React from "react";
import {Heading, Text, Box} from "@chakra-ui/react";
import Link from "next/link";

const Block = ({ path, desc, name}) => {
    return (
        <Link href={`/${path}`}>
        <Box _hover={{boxShadow:'lg', rounded:'md', bg:'white'}} borderWidth='1px' p={10}>
            <Heading pb='0.5em'>{name}</Heading>
            <Text>{desc}</Text>
        </Box>
        </Link>
    );
};

export default Block;
