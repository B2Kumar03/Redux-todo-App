import { Button, Heading, Select, Table, TableCaption, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteData, fetchData, updateData } from "../allMethod/ALL_CRUD_Method";
import Loading from "./Loading";
import { updateTimeID } from "../Redux/ToDo/action_creator";
import { UpdateTitleModal } from "./UpdateTitleModal";
import { LoginForm } from "./LoginForm";

const ToDoList = () => {
  const dispatch = useDispatch();
  const {isOpen,onClose,onOpen}=useDisclosure()
  const state  = useSelector((state) => state.todo);
  console.log(state);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const handleOnchange=(id,v,s)=>{
    if(v=="se"){
      return
    }
   else if(v=='status'){
      updateData(dispatch,!s,id,v)
    }
    else{
      updateData(dispatch,!s,id,v)
      dispatch(updateTimeID(id))
     onOpen()
    }
  
  }



  if(state.isLoading){
    return <Loading/>
  }
  return (
    <>
    <UpdateTitleModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Heading textAlign={"center"} m={2}>
        List of todos
      </Heading>
      <hr />

      <Table variant="simple" size="sm" mt={10} cellPadding={1} >
     
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Status</Th>
          <Th>Description</Th>
          <Th>Update</Th>
        </Tr>
      </Thead>
      <Tbody>
        {state.data.map((ele)=>{
         return <Tr key={ele.id}>
            <Td>{ele.title}</Td>
            <Td color={ele.status?"green":""}>{ele.status?"Completed ✅":"Pending"}</Td>
            <Td>{ele.description}</Td>
            <Td>
              <Select onChange={(e)=>handleOnchange(ele.id,e.target.value,ele.status)}>
                <option value={'se'} >--Select--</option>
                <option value={"status"}>Status</option>
                <option value={"title"}>Title</option>
              </Select>
            </Td>
            <Td><Button bg={"red"} onClick={()=>deleteData(dispatch,ele.id)}>Delete</Button></Td>
         </Tr>
        })}
      </Tbody>
     
    </Table>
    </>
  );
};

export default ToDoList;
