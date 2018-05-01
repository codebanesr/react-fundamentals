//since we are exporting only one function you might as well omit the name of the function 
export default function courseReducer(state = [], action){
    //the parameters are current state and an action
    switch(action.type){
        case 'CREATE_COURSE':
            //same as state.push(action.course) but honours immutability
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}