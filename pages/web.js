import Layout from '/components/Layout';
import Head from "next/head";
import {Box, Center, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Image from "next/image";
import img from "../public/web.png";
import clock from '/public/clock.png'


export default function Web( ) {
    return <Layout >
        <Head>
            <title>Web </title>
        </Head>

        <div>
            <Flex mb='4em' >
                <Center ml='10em'>
                    <Box p='4' w='25em'>
                        <Heading size='2xl'  pb='1em'>Web Developer</Heading>
                        <Text fontSize='xl'>Веб-розробка відноситься до створення, створення та підтримки веб-сайтів . Він включає в себе такі аспекти, як веб-дизайн, веб-видавництво, веб-програмування та керування базами даних.</Text>
                    </Box>
                </Center>
                <Box mr='10em' w='100%'  bg='grey.400'>
                    <Image src={img}  quality={100}/>
                </Box>
            </Flex>
            <Box p='1rem' bg='black'>
                <Heading pl='3em' pt='3em' color='white' size='lg'>Коли студенти обирають напрям для навчання часто з'являється питання: back-end чи front-end? Як розрізнити ці поняття? З чим безпосередньо доведеться працювати?</Heading>
                <Text p='3em' fontSize='xl' color='white'>
                    Спершу потрібно розуміти, що в бекенді в основному використовується математика та логіка, в фронтенді більше потрібне відчуття форми. Оскільки фронтед – це зовнішній вигляд, а бекенд – це власне вся механіка сайту.

                    Різниця між бекендом та фронтедом на прикладі годинника. Циферблат, стрілки, цифри, механізм управління стрілками – все те, що бачить користувач – це є фронтенд. Ми бачимо конкретний результат – котра година, ми можемо цей час під корегувати. Але от як працюють шестерні, як працює сам механізм, процесор чи пружинка користувач не бачить. Це і є бекенд."</Text>
                <Center>
                    <Image src={clock}/>
                </Center>
            </Box>
        </div>

    </Layout>;
}
