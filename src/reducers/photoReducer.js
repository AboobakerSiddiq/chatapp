const initialState={
    files:[],
}
export const photoReducer=(state=initialState,action)=>{
     
    switch(action.type){
        
        case 'ADD_PHOTOONE':
            const {id,files}=action.payload 
            return{
                ...state,
                files:[
                    ...state.files,
                    {
                        id:id,
                        files:files
                    }
                ]
                 
                
            }
            case 'ADD_PHOTOTWO':
                const {key,file}=action.payload
                return{
                    ...state,
                    files:[
                        ...state.files,
                        {
                            id:key,
                            files:file
                        }
                    ]
                }

            
        
        
        default:return state;
    }
}