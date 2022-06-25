import { ADDTODO, COMPLETE, DELTODO } from "./Actiontype";


export const  ADDFunc = (payload) =>({
type:ADDTODO,
payload
})

export const DELFunc = (payload) =>({
    type:DELTODO,
    payload
})
export const CompFunc = (payload) =>({
    type :COMPLETE,
    payload
})