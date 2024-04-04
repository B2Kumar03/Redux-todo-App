import { act } from "react-dom/test-utils"
import { THEME_TOGGLE } from "./actio_Item"
import { intialstate } from "./initial_state"

export const themReducer=(state=intialstate,action)=>{
    switch(action.type){
        case THEME_TOGGLE:{
            return {...state,mode:action.payload}
        }
        default:
            return state
    }
}