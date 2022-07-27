import Head from "next/head";
import { Heading, Text, HStack, StackDivider, Box, VStack, Center } from "@chakra-ui/react";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import styles from '../styles/Home.module.css';
import icon from '../public/favicon.ico';



export default function Home(){
    function Feature({ title, desc, hrefLink, ...rest }) {
        return (
            <Center>
                <Box p={5} shadow='md' borderWidth='1px' {...rest} w="20rem" h="8rem">
                <Heading fontSize='xl' className={styles.titleheader}><a href={hrefLink}>{title} </a> <ArrowForwardIcon /></Heading>
                <Text mt={4}>{desc}</Text>
                </Box>
            </Center>
          
        )
      }

    return(<>
    <Head>
        <title>Internship Program</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={icon} />
    </Head>
    <div className={styles.container}>
        <HStack spacing='1rem'
                divider={<StackDivider borderColor='gray.400' />}>
            <Box className={styles.delmantitle}>
                <a href="/">delman.io</a>
            </Box>
            <Box>
                Internship Program
            </Box>
        </HStack>
    </div>
    
    <VStack divider={<Center><StackDivider borderColor='gray.200' w="40rem" /></Center>} spacing="2rem" pt={20}>
        <Heading as='h3'>
            Internship Program
        </Heading>
        <HStack spacing="2rem">
            <Feature title='Title Transformer'
                    desc='A simple title transformation'
                    hrefLink='/title-transformer'/>
            <Feature title='User Fetcher'
                    desc='A simple API Fetching and rendering process'
                    hrefLink='/user-fetcher'/>
        </HStack>
    </VStack>
    

    </>)
    
    
}