import React, { useReducer, useRef, useState } from "react";
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
import {useDispatch,useSelector} from 'react-redux'
import { updateData } from "../allMethod/ALL_CRUD_Method";

export const UpdateTitleModal = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.todo)
  const [userData,setUserData]=useState({
   title:""
  })
  const handleChange=(e)=>{
    setUserData((prev)=>{
      return{
        ...prev,
        title:e.target.value
      }
    })
  }
  const handleClick=()=>{
  updateData(dispatch,userData,state.update_time_id)
   onClose();
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
          <ModalHeader color={"#5356FF"} p={5}>
            Enter New Title
          </ModalHeader>

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title :</FormLabel>
              <Input ref={initialRef} placeholder="title" onChange={(e)=>handleChange(e)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#5356FF" mr={3} onClick={handleClick}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
