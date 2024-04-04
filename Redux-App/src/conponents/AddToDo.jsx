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
import { addData, updateData } from "../allMethod/ALL_CRUD_Method";
import {useDispatch} from 'react-redux'






export const AddToDo = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch=useDispatch();
  const [todo,setTodo]=useState({
    title:"",
    description:"",
    status:false
  })
  function handleChange(e){
    setTodo({
      ...todo,
      title:e.target.value
    })
  }
  function handleChange1(e){
    setTodo((prev)=>{
      return {
        ...prev,
        description:e.target.value
      }
    
  })
}
  function handleChange2(e){
    setTodo((prev)=>{
      return{
        ...prev,
        status:!todo.status
      }
    })
  }
  
  function handleclick(){
    onClose()
    addData(dispatch,todo)
    
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
            Add To Do
          </ModalHeader>

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title :</FormLabel>
              <Input
                ref={initialRef}
                placeholder="title"
                onChange={(e)=>handleChange(e)}
             
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Discription(optional) :</FormLabel>
              <Input
                placeholder="discription"
                onChange={(e)=>handleChange1(e)}
              />
            </FormControl>
        
          
            <FormControl mt={4} display={"flex"}>
              <p className="roboto-bold">Completed</p>
              <Checkbox
                colorScheme="green"
                isChecked={todo.status}
                ml={5}
                onChange={(e)=>handleChange2(e)}
        
              />

              {/* </Checkbox> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#5356FF" mr={3} onClick={handleclick}
            isDisabled={!(todo.title!="" &&todo.description!="" )} >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
