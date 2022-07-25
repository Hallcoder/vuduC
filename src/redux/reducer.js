import * as actions from './actions'
export default function reducer(state = {},action){
switch(action.type){
    case actions.set_currentMovie:
        let st = {...state};
        st = action.payload.currentMovie;
        return st;
    default:
        return state;
}
}