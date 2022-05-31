import Layout from '/components/Layout';
import Head from "next/head";
import {Box, Center, Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Image from "next/image";
import img from "../public/qa.png";


export default function Qa( ) {
    return <Layout >
        <Head>
            <title>QA </title>
        </Head>

        <div>
            <Flex mb={['1em','4em']} direction={['column','row']}  >
                <Center ml='10em'>
                    <Box p='4'>
                        <Heading size='2xl' pb='1em'>Тестувальник ПЗ</Heading>
                        <Text fontSize='xl' w='60%'>фахівець із забезпечення якості, діяльність
                            якого спрямована на поліпшення процесу розробки програмного забезпечення, запобігання дефектам і виявлення помилок у роботі продукту. </Text>
                    </Box>
                </Center>
                <Box mr='10em' w='100%'  bg='grey.400'>
                    <Image src={img}  quality={100}/>
                </Box>
            </Flex>
            <Box bg='black'>
                <Text p={['1em','5em']} fontSize='xl' color='white'>QA-інженерів привертає можливість поліпшувати якість продукту і при
                    цьому освоювати різні технології та вивчати деталі продукту. Інтерес до роботи посилюється з часом: спочатку не зрозуміло, що робиться і для чого,
                    а потім приходять розуміння і бажання брати на себе складніші завдання.
                    Не останнє місце посідає і можливість долучитися до світу високих технологій та великих зарплат. Поріг входу на QA нижчий, ніж на програміста. Дехто вважає роботу QA більш цікавою та різноманітною, ніж у
                    розробника.</Text>
            </Box>
            <Heading ml={['1em','5em']} mt='3em'>НЕОБХІДНІ ОСВІТА, ЗНАННЯ ТА НАВИЧКИ:</Heading>
            <UnorderedList mt={['1em','2em']} ml={['5em','10em','15em']} mb='7em'>
                <ListItem>розуміння основ розробки ПЗ</ListItem>
                <ListItem>знання теорії та основних інструментів тестування;</ListItem>
                <ListItem>мінімум середній рівень знання англійської мови;</ListItem>
                <ListItem>критичне та аналітичне мислення</ListItem>
            </UnorderedList>
        </div>

    </Layout>;
}
