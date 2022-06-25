import { createStore } from "redux";
import { TodoReducer } from "./Reducer";


export const store  = createStore(TodoReducer)

console.log(store.getState())