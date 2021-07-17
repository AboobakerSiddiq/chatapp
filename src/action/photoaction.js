import { nanoid } from 'nanoid'
export const inputphotoone = files =>{
    return{
        type:'ADD_PHOTOONE',
        payload:{
            id:new Date().getTime().toString(),
            files:files
        }
    }
}
export const inputphototwo=file=>{
    return{
        type:'ADD_PHOTOTWO',
        payload:{
            key:nanoid(),
            file:file
        }
    }
}