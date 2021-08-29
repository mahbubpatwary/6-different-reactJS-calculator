import { C, EQUAL, NUMBER, OPERATOR, ZERO } from "./actionType"

export const numberAction = (playhod)=>{
    return {
        type : NUMBER,
        playhod : playhod
    }
}

export const operatorAction = (playhod)=>{
    return {
        type : OPERATOR,
        playhod : playhod
    }
}
export const equalAction = (playhod)=>{
    return {
        type : EQUAL,
        playhod : playhod
    }
}
export const zeroAction = (playhod)=>{
    return {
        type : ZERO,
        playhod : playhod
    }
}
export const cAction = (playhod)=>{
    return {
        type : C,
        playhod : playhod
    }
}