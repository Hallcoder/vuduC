import * as actions from './actions'
export default function reducer(state = {currentMovie:{},type:'CM'},action){
switch(action.type){
    case actions.set_currentMovie:
        if(state.currentMovie === action.payload.currentMovie){
            break;
        }
        let st = {...state};
        st = action.payload.movie;
        return st;
    default:
        return state;
}
}