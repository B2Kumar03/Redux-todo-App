import React, { useReducer, useRef, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import  axios  from "axios";
import { ismatching,authvalue } from "../Redux/Auth/action_creator";
import { IS_MATCHING } from "../Redux/Auth/actio_Item";
import {useToast}  from "@chakra-ui/react";
export const LoginForm = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.auth)
  const toast=useToast()
  
  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    if(e.target.name=='email'){
      setUserData((prev)=>{
        return{
          ...prev,
          email:e.target.value
        }
      })
    }
    else{
      setUserData((prev)=>{
        return{
          ...prev,
          password:e.target.value
        }
      })
    }
  }
  const handleClick=async()=>{
    dispatch(ismatching())
  
    try {
      const {data}=await axios.post('https://reqres.in/api/login', userData)
     
      dispatch(ismatching())
      dispatch(authvalue(data.token))
      onClose()
    } catch (error) {
      dispatch(ismatching())
      onClose()
      console.log(error);
    }
  // }
  toast({
    title: "Login Success",
    status: "warning",
    duration: 3000,
    isClosable: true,
    position:"top"
    
  });
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"#5356FF"} p={5} fontSize={20}>
             User Login
          </ModalHeader>
      
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="example@gmail.com" name="email" onChange={(e)=>handleChange(e)}/>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input ref={initialRef} placeholder="example@#1231"  onChange={(e)=>handleChange(e)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#5356FF" mr={3} onClick={handleClick} isDisabled={state.isMatching} >
              {state.isMatching?"Logning...":"Login"}
            </Button>
            <Button onClick={onClose} >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
