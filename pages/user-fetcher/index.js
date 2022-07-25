import { 
    Heading, 
    HStack, 
    StackDivider, 
    Box, 
    VStack, 
    Center,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Text,
    SkeletonText,
    SkeletonCircle,
    Image
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import styles2 from '../../styles/UserFetcher.module.css';

export default function UserFetcher({data}){
    const [loaded, setLoaded] = useState(true);
    const [person, setPerson] = useState(data);
    const [loadButton, setLoadButton] = useState(false);
    const url = 'https://randomuser.me/api/';

    function fetchData(){
        setLoadButton(true)
        console.log('fetching')
        axios.get(url)
        .then((res)=>res.data.results[0])
        .then((data)=>{
            setPerson(data)
            setLoaded(false);})
        .catch((err)=>console.log('error : ', err))
        
        console.log('done');
    }

    useEffect(()=>{
        setLoadButton(false)
    }, [person])
    
    function SkeletonLoading(){
        return(<>
            <SkeletonCircle size='20'isLoaded={!loaded}/>
            <SkeletonText mt='4' noOfLines={6}  w='14rem'isLoaded={!loaded}/>
        </>)
    }


    return(<>
    <div className={styles.container}>
        <HStack spacing='1rem'
                divider={<StackDivider borderColor='gray.400' />}>
            <Box className={styles.delmantitle}>
                <a href="#">delman.io</a>
            </Box>
            <Box>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Internship Program</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">User Fetcher</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </HStack>
    </div>
    <VStack divider={<Center><StackDivider borderColor='gray.200' w="15rem" /></Center>} spacing="3rem" pt={20}>
        <Heading as='h3'>
            User Fetcher
        </Heading>
        <Center 
        padding='6' 
        boxShadow='lg' 
        bg='white' 
        w='18rem'
        border='1px'
        borderColor={person.gender === 'female'? 'pink.100':'blue.100'}
        borderRadius='4px'>
            <VStack spacing='1rem'>
                {loaded? <SkeletonLoading />:
                 <>
                <Image 
                src={person.picture.large} 
                borderRadius='full'/>
                <Text className={styles2.name}>{person.name.first} {person.name.last}</Text>
                <Text className={styles2.email}>{person.email}</Text>
                <HStack spacing='3.5rem'>
                    <VStack>
                        <Text className={styles2.nat}>{person.nat}</Text>
                        <Text className={styles2.nationality}>Nationality</Text>
                    </VStack>
                    <VStack>
                        <Text className={styles2.nat}>{person.dob.age}</Text>
                        <Text className={styles2.nationality}>Age</Text>
                    </VStack>
                </HStack>
                 </>
                }
            </VStack>
        </Center>
        {loaded? 
            <Button onClick={(e)=>{
                e.preventDefault()
                fetchData()}}
                isLoading={loadButton}
                w='25rem'>Fetch User</Button>:
            <Button onClick={(e)=>{
                e.preventDefault()
                fetchData()}}
                isLoading={loadButton}
                w='25rem'>Refetch User</Button>
            }
    </VStack>
    </>)
}

export async function getServerSideProps(){
    const url = 'https://randomuser.me/api/';
    const res = await axios.get(url);
    const data = res.data.results[0];
    return {
        props:{data}
    }
}
