import { AUTH_VALUE, IS_MATCHING } from "./actio_Item";
import { authvalue } from "./action_creator";
import { intialState } from "./initial_state";



export const Authreducer=(state=intialState,action)=>{
 
    switch(action.type){
        case IS_MATCHING:
            return{...state,isMatching:!state.isMatching}
        case AUTH_VALUE:
            return {...state,authValue:!state.authValue,token:action.payload}; 
        default:
            return state
    }

}