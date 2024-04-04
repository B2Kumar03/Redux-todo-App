import { ADD_TODO, ALL_TODO, IS_ERROR, IS_LOADING, REMOVE_TODO, UPDATE_TIME_ID, UPDATE_TODO } from "./actio_Item"

export const addToDo=(payload)=>{
    return {type:ADD_TODO, payload}
}
export const removeToDo=(id)=>{
    return {type:REMOVE_TODO,payload:id}
}
export const updateToDo=(updates)=>{
    return {type:UPDATE_TODO,payload:updates}
}

export const toDoData=(data)=>{
   
return {type:ALL_TODO,payload:data}
}

export const isloading=()=>{
    return {type:IS_LOADING}
}
export const isError=()=>{
    return {type:IS_ERROR}
}
export const updateTimeID=(id)=>{
return {type:UPDATE_TIME_ID,payload:id}
}