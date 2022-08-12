const stateDefault = {
    topclothes:'',
    botclothes:'',
    shoes:'',
    handbags:'',
    necklaces:'',
    hairstyle:'',
    background:'',

};


const ModelReducer = ( state = stateDefault,action)=>{
    switch (action.type){
     case'SET_AO':
       // state.topclothes
     state[action.payload.type] = action.payload.img;
        return {...state};
        default : 
             return state;
    }
}

export default ModelReducer;