import { nanoid } from 'nanoid'
export const inputchatone = text =>{
    return{
        type:'ADD_INPUTONE',
        payload:{
            id:new Date().getFullYear().toString(),
            text:text
        }
    }
}
export const inputchattwo=data=>{
    return{
        type:'ADD_INPUTTWO',
        payload:{
            key:nanoid(),
            data:data
        }
    }
}

