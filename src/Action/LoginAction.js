import *as ActionTypes from '../Action/type';

export function handleChange(event){
    return function(dispatch)
    {
    dispatch({type:'SEND',payload:event.target});
    }
    }

    export function registor(){
        return function(dispatch)
        {
        dispatch({type:'REGISTOR'});
        }
        }
    
        export function username(event){
        return function(dispatch)
        {
        dispatch({type:'UserName ',payload:event.target});
        }
        }

    export function password(event){
         return function(dispatch)
        {
          dispatch({type:'PassWord ',payload:event.target});
          }
          }