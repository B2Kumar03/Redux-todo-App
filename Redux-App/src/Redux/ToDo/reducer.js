import { ALL_TODO, IS_ERROR, IS_LOADING, UPDATE_TIME_ID } from "./actio_Item";
import { intialState } from "./initial_state";

export const reducer=(state=intialState,action)=>{
    switch(action.type){
        case ALL_TODO:
            return {...state,data:action.payload}
        case IS_LOADING:
            return {...state,isLoading:!state.isLoading};
        case IS_ERROR:
            return {...state,isError:!state.isError}
        case UPDATE_TIME_ID:
            return {...state,update_time_id:action.payload}
        default:
            return state
    }

}