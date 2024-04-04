import React, { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Select,
  useColorMode,
  useDisclosure,
  useToast,
  Text
} from "@chakra-ui/react";
import { AddToDo } from "./AddToDo.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { useSelector ,useDispatch} from "react-redux";
import { authvalue } from "../Redux/Auth/action_creator.js";
import { themetoggler } from "../Redux/Theme/action_creator.js";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isAddToDoOpen, onOpen: onAddToDoOpen, onClose: onAddToDoClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const toast = useToast();
  const state = useSelector((state) => state.auth);
  const state2 = useSelector((state) => state.theme);
  const dispatch=useDispatch()
  const dispatch2=useDispatch()
  useEffect(()=>{
    localStorage.setItem("chakra-ui-color-mode",'light')
  },[])

  const handleAddToDoClick = () => {
    console.log(state.authValue);
    if (!state.authValue) { // Check if user is not logged in
      toast({
        title: "You are not logged in",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position:"top"
        
      });
      onLoginOpen();
    }
    else{
     
    onAddToDoOpen();
    } 
  };


  const handleLoginClick = () => {
    if(!state.authValue){
      onLoginOpen()
    }
    else{
      dispatch(authvalue(' '))
    }
    
  };
  

  return (
    <>
      <LoginForm isOpen={isLoginOpen} onClose={onLoginClose} />
      <AddToDo isOpen={isAddToDoOpen} onClose={onAddToDoClose} />

      <Flex justifyContent={"center"} alignItems={"center"} bg={"#5356FF"}>
        <Box p="4" className="roboto-light-italic" color={"white"} marginLeft={40}>
          <Heading>Redux - ToDo App</Heading>
        </Box>
        <Spacer />
        <Box p="4" fontSize={35} display={"flex"} alignItems={"center"} color={'white'}>
          <Text fontSize={15}>Change theme:</Text>
            
            <Select onChange={(e) => {
              dispatch2(themetoggler(e.target.value))
              toggleColorMode()
            }} color={"black"}>
              
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
        
        </Box>
      </Flex>
      <Flex justifyContent={"flex-end"} alignContent={"center"} p={5}>
        <Button onClick={handleAddToDoClick} bg={"green"}>
          Add ToDo
        </Button>
        <Button onClick={()=>handleLoginClick()} ml={5} bg={"red"}>
          {state.authValue?"Logout":"Login"}
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
