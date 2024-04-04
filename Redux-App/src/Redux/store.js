import { legacy_createStore } from "redux";
import {reducer} from './ToDo/reducer'
import {combineReducers} from 'redux'
import { Authreducer } from "./Auth/Authreducer";
import { themReducer } from "./Theme/themReducer";


const rootReducer = combineReducers({
    todo: reducer,
    auth:Authreducer,
    theme:themReducer
  });

export const store=legacy_createStore(rootReducer)
