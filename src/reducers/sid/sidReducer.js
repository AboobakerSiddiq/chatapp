const initialState={
    input:[],
}
export const inputReducer=(state=initialState,action)=>{
     
    switch(action.type){
        
        case 'ADD_INPUTONE':
            const {id,text}=action.payload 
            return{
                ...state,
                input:[
                    ...state.input,
                    {
                        id:id,
                        text:text
                    }
                ]
                 
                
            }
            case 'ADD_INPUTTWO':
                const {key,data}=action.payload
                return{
                    ...state,
                    input:[
                        ...state.input,
                        {
                            id:key,
                            text:data
                        }
                    ]
                }

            
        
        
        default:return state;
    }
}