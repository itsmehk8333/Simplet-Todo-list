import { ADDTODO, COMPLETE, DELTODO } from "./Actiontype"

const init = {
    todo:[],
    complete:[]
}

export const TodoReducer = (store = init ,{type, payload})=>{
switch(type){
    case ADDTODO:
        return {
        ...store , todo:[...store.todo,payload]
        }
    case DELTODO:
        store.todo.splice(payload, 1)

        return{
          ...store , todo:[...store.todo]
        }
    case COMPLETE:
        return{...store , complete :[...store.complete , payload]}
   default:
    return {...store}
}
}