import *as ActionTypes from '../Action/type';

const initialState={
username:'',
password:'',
expration:'',
result:'',
msg: ''

}

export default(state=initialState,action)=>{
switch(action.type){
 case "SEND":{
 return{...state,[action.payload.name]:action.payload.value}
        }
        case "REGISTOR":{
            switch(state.operation){
                 case "username":
              if((state.username+state.username)==state.result)
              return{...state,msg:'valid'}
              else
 return{...state,msg:'Please Enter User name'}
      
      case "password" :
    if((state.password+state.password)==state.result)
return{...state,msg:'valid'}
else
return{...state,msg:'Please Enter Password'}


    }

}
      
      
default:
return state;
}
}