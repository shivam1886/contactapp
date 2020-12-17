import { GET_CONTACTS ,SHOW_CONTACT,CREATE_CONTACT,UPDATE_CONTACT,DELETE_CONTACT } from "../types/contactTypes";

const initState = [];

export default function contactReducer(state = initState,action){
    switch(action.type) {
        case GET_CONTACTS:
           return action.payload;
          break;
          case SHOW_CONTACT:
            return state;
          break;
          case CREATE_CONTACT:
            return state;
          break;
          case UPDATE_CONTACT:
            return state;
          break;
          case DELETE_CONTACT:
            state.filter(function(contact){
                if(contact.id != action.payload)
                    return true;
            })
          break;
        default:
            return state;
      }
}