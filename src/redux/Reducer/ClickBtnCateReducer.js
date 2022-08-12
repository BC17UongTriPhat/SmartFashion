const stateDefault = "topclothes";


const ChoosenCategoryReducer = ( state = stateDefault,action)=>{
    switch (action.type){
        case "SET_CATEGORY":
            state = action.payload;
            return state;
        default : 
             return state;
    }
}

export default ChoosenCategoryReducer;