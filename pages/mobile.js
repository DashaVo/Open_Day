import Layout from '/components/Layout';
import Head from "next/head";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import img from "../public/mobile.jpg";


export default function Mobile( ) {
    return <Layout >
        <Head>
            <title>Mobile </title>
        </Head>

        <div>
            <Flex mb='4em' >
                <Center ml='10em'>
                    <Box p='4'>
                        <Heading size='2xl' pb='1em'>Мобільний розробник</Heading>
                        <Text fontSize='xl' w='60%'>Кожен проект mobile-розробки (чи то казуальна гра або онлайн-банкінг) починається з ідеї. Перше завдання мобільного розробника – зрозуміти цю ідею і те, чого клієнт хоче досягти за допомогою програми. Це потрібно, щоб визначити, як має виглядати реалізація ідеї </Text>
                    </Box>
                </Center>
                <Box mr='10em' w='100%'  bg='grey.400'>
                    <Image src={img}  quality={100}/>
                </Box>
            </Flex>
            <Box h='20em' bg='black'>
                <Text p='5em' fontSize='xl' color='white'>Мобільний розробник може спеціалізуватися на створенні програм для певних платформ, наприклад, Android для Google, iOS для Apple та Windows Phone для Microsoft. Залежно від профілю назва професії може бути більш конкретною, наприклад, розробник програм для Android.Перевага та унікальність професії мобільного розробника в тому, що все залежить тільки від тебе самого: маючи спочатку гарну ідею та грамотно втіливши її у світ мобільних технологій, можна в найкоротші терміни створити проект, і стати мільйонером.</Text>
            </Box>
        </div>

    </Layout>;
}
