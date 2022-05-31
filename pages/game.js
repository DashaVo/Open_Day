import Layout from '/components/Layout';
import Head from "next/head";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import img from "../public/game.png";
import full from '/public/gamedev.png'


export default function Game( ) {
    return <Layout >
        <Head>
            <title>GameDev </title>
        </Head>

        <div>
            <Flex mb='4em' >
                <Center ml='7em'>
                    <Box p='2em'>
                        <Heading size='2xl' pb='1em'>Game Developer</Heading>
                        <Text fontSize='lg' w='25em'>розробники ігор,які відповідають за проектування та розробку відеоігор для ПК,
                            консолей і мобільних додатків. Їхня робота полягає в тому, щоб закодувати базовий двигун на основі ідей команди дизайнерів.
                            Вони також можуть брати участь у дизайні персонажів, дизайні рівнів, анімації та модульному тестуванні </Text>
                    </Box>
                </Center>
                <Box bg='grey.400'>
                    <Image src={img}  quality={100}/>
                </Box>
            </Flex>
            <Box h='20em' bg='black'>
                <Text p='5em' fontSize='xl' color='white'>Щоб стати успішним як розробник ігор, ви повинні мати сильні художні навички, добре знання програмного забезпечення для кодування та вміти працювати в команді. Зрештою, першокласний розробник ігор – це той, хто може перетворити основні ідеї в чудово створені ігри, які відповідають бажаним специфікаціям компанії.</Text>
            </Box>
            <Center bg='black' w='100%'>
                <Image src={full}/>
            </Center>

        </div>

    </Layout>;
}
