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
    Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';

export default function TitleTransformer(){
    const [count, setCount] = useState(1);
    const [isRandom, setIsRandom] = useState(false);
    const [randColor, setRandColor] = useState();
    const arrayCount = Array.from({length:count}, (_,i)=>i+1);

    function increamentDisable(){
        if(count >= 5){
            return true
        }return false
    }

    function decreamentDisable(){
        if(count <= 1){
            return true
        }return false
    }


    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // function getInterval(){
    //     let randomColor
    //     setInterval(()=>{
    //         randomColor = getRandomColor();
    //     }, 1000);
    //     return randomColor;
    // }
    
    

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
                        <BreadcrumbLink href="#">Title Transformer</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </HStack>
    </div>
    <VStack divider={<Center><StackDivider borderColor='gray.200' w="40rem" /></Center>} spacing="1rem" pt={20}>
        {arrayCount.map(x => {
            if(isRandom === false){
                return(<>
                    <Heading as='h3' color='black' >
                        Internship Program - {x}
                    </Heading>
                </>)
            }else{
                return(
                    <Heading as='h3' color={getRandomColor()} >
                        Internship Program - {x}
                    </Heading>
                )
            }
        })}
        
        <HStack divider={<StackDivider borderColor='gray.200' />} spacing="1.5rem">
            <Box>
                Running for: 0s
            </Box>
            <Box>
                Title Count : {count}
            </Box>
        </HStack>
        <HStack spacing="1.5rem">
            <ButtonGroup>
                <Button colorScheme='gray' onClick={()=>isRandom === false ? setIsRandom(true):setIsRandom(false)}>Randomize Color</Button>
                <Button colorScheme='gray' onClick={()=>setCount(count+1)} disabled={increamentDisable()}>Add Title</Button>
                <Button colorScheme='gray'onClick={()=>setCount(count-1)} disabled={decreamentDisable()}>Remove Title</Button>
            </ButtonGroup>
        </HStack>
    </VStack>
    </>)
}