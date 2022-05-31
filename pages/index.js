import Head from 'next/head'
import Layout from "../components/Layout";
import {Box, Center, Flex, Heading, SimpleGrid, Spacer, Text} from "@chakra-ui/react";
import { FaUsers, FaMoneyBill, FaLanguage,FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import Block from "../components/Block";
import Image from 'next/image'
import img from "/public/hero.webp"

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>Open Day</title>
        </Head>
          <Flex mb='4em' >
              <Center ml='10em'>
              <Box p='4'>
                  <Heading size='2xl' pb='1em'>То що ж обрати?</Heading>
                  <Text fontSize='xl' w='60%'>Існує стереотип, що всі айтішники – це програмісти, але це не так. IТ-галузь об’єднує в собі досить багато різнопланових професій, в тому числі й “нетехнічних”.</Text>
              </Box>
              </Center>
              <Box mr='10em' w='100%'  bg='grey.400'>
                  <Image src={img}  quality={100}/>
              </Box>
          </Flex>
          <Box h='20em' bg='black'>
              <Text p='5em' fontSize='xl' color='white'>Програміст – це дуже узагальнене поняття, яке в собі об’єднує кількадесят напрямів. Ваш вибір залежить від того, які саме продукти чи сервіси ви хочете створювати – займатись розробкою штучного інтелекту, створювати розумні пристрої, розробляти роботів, займатись захистом даних, чи вчитись систематизувати велетенську кількість даних та аналізувати їх.</Text>
          </Box>
          <Center mt='1em'>
                  <Heading size='2xl' p='1em'>Популярні професії</Heading>
          </Center>
        <SimpleGrid m='5em' columns={2} spacing={10}>
         <Block desc='Тестувальник знає, як система працює, де вона не працює, і де працює не так, як задумано. Він вміє визначити, чим викликана помилка, або хоча б знає, де це шукати. Чим тестувальник досвідченіший, тим більш важкою і цікавою є його робота' path='qa' name='Тестувальник ПЗ'/>
            <Block desc='майстер, який створює програмний код і візуалізацію концепцій відеоігор, глибоко знає програмування і постійно удосконалює свої унікальні знання' path='game' name='Геймдев'/>
            <Block desc='IT-спеціаліст, який спеціалізується на створенні програм для планшетів та смартфонів на iOS та Android' path='mobile' name='Мобільна розробка'/>
            <Block desc='фахівець, який займається написанням, оновленням, виправленням і вдосконаленням алгоритмів для додатків, сайтів і окремих елементів, з використанням різних мов програмування' path='web' name='Web-розробник'/>
            <Block path='database' name='Професії пов`язані з даними' desc='багаторівневий технічний фахівець, який відповідає за правильний і безпечний вибір технологій зберігання даних,аналізу, а також створення і оптимізацію всіляких запитів пов`язаних з БД'/>
            <Block desc='не кодом єдиним живе IT-ітдустрія' path='nottech' name='Нетехнічні спеціальності'/>
        </SimpleGrid>
      </Layout>
  )
}
