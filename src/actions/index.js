import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCES = 'FETCH_SUCCES';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_ADD = 'FETCH_ADD';
export const ERROR_SMURF_ADD = 'ERROR_SMURF_ADD';

export const fetchSmurfs = ()=> (dispatch) =>{
    dispatch({type:FETCH_START});
    axios.get('http://localhost:3333/smurfs')
         .then(response =>{
             dispatch({type:FETCH_SUCCES, payload:response.data})
         })
         .catch(err =>{
             dispatch({type:FETCH_FAILED, payload:console.err})
         })
}
export const addSmurfs = ({name, nickname, position, summary}) =>{
    return{
        type:FETCH_ADD,payload: {name,nickname,position,summary}
    }
}

export const errorMessage = (message) =>{
    return{
        type:ERROR_SMURF_ADD, payload:message
    }
} 
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.