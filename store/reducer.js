import { ADD_LIST, DELETE_LIST, SET_LISTS } from "./actions";

const initState =
{
  lists:[]

} 

 const reducer = (state=initState, action) =>{
   switch (action.type) {
     case SET_LISTS:
       let newLists = []
       for(let i of action.lists){
         newLists.push({
           title:i.list.title,
           place:i.list.shop,
           products:i.list.products,
           id:i.id
         })
       }
       return {
         ...state,
         lists:newLists
       }
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