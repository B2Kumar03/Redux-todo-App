import { AUTH_VALUE, IS_MATCHING } from "./actio_Item"

export const  ismatching=()=>{
    return {type:IS_MATCHING}
}
export const authvalue=(token)=>{
     return {type:AUTH_VALUE,payload:token}
}
