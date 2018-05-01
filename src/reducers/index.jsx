// this is the root reducer we generally call it indexedDB.js
import {combineReducer} from 'redux';
import courses from './courseReducer';
//since courseReducer was exported default i can call it whatever i want to call it, now remember course and courses are different, 


const rootReducer = combineReducer({
    courses
    // using ES6 shorthand property name
})


export default rootReducer;