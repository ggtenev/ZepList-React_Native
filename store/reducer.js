import { ADD_LIST, DELETE_LIST } from "./actions";

const initState =
{
  lists:[]

} 

 const reducer = (state=initState, action) =>{
   switch (action.type) {
     case ADD_LIST:
       const newList = {
         title:action.list.title,
         place:action.list.shop,
         id:action.id,
         products:action.list.products
       }
       return {
         ...state,
         lists:[newList,...state.lists]
       }
       break;
       case DELETE_LIST:
        const newItems = state.lists.filter(i => i.id !== action.id)
        return {
          ...state,
          lists:newItems
        }
     default:
       break;
   }
   return state
}

export default reducer