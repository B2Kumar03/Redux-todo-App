import axios from "axios";
import { isError, isloading, toDoData } from "../Redux/ToDo/action_creator";

export const fetchData = async (dispatch) => {
  console.log(isloading());
  dispatch(isloading());
  try {
    const { data } = await axios({
      method: "GET",
      baseURL: "http://localhost:8080",
      url: "/todo",
    });

    dispatch(toDoData(data));
    dispatch(isloading());
  } catch (error) {
    console.log(error);
    dispatch(isloading());
    dispatch(isError());
  }
};

export const deleteData = async (dispatch, id) => {
  try {
    axios.delete(`http://localhost:8080/todo/${id}`);
    fetchData(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async(dispatch, data, id, updateType) => {
  
  if (updateType === "status") {
    const {data1}=await axios.patch(`http://localhost:8080/todo/${id}`, { status: data });
    fetchData(dispatch);
  } else {
    const {data1}=await axios.patch(`http://localhost:8080/todo/${id}`, data);
    fetchData(dispatch);
  }
};


export const addData=async(dispatch,data)=>{
 const {data1}=await axios.post('http://localhost:8080/todo',data)
  fetchData(dispatch)
}