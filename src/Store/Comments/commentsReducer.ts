import {Reducer} from "redux";
import {
  IPost,
  POST_TOGGLE_SAVE,
  POSTCARD_TOGGLE_VISIBLE,
  POSTLIST_REQUEST,
  POSTLIST_REQUEST_ERROR,
  POSTLIST_REQUEST_SUCCESS,
  PostListRequestAction,
  PostListRequestErrorAction,
  PostListRequestSuccessAction,
  PostToggleSaveACtion,
  PostCardToggleVisibleAction
} from "./postsActions";
import {RootStateOrAny} from "react-redux";


type PostsActions =
  PostListRequestSuccessAction |
  PostListRequestAction |
  PostListRequestErrorAction |
  PostToggleSaveACtion |
  PostCardToggleVisibleAction;

export const postsReducer: Reducer<RootStateOrAny, PostsActions> = (state, action) => {
  switch (action.type) {

    case POSTLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case POSTLIST_REQUEST_SUCCESS:
      //фильтрация от повторов
      const newListHasPreview = action.listArr.filter(item=>item.preview.includes('jpg'||'png'));
      const existingIds = state.list.map((item: { id: string })=>item.id);//достать все айди из существующего списка.(для простоты перебора в some)
      const newFilteredList = newListHasPreview.filter(item => {//фильтр нового приходящего списка от повторных постов (по id)
        return (//true/false
          !existingIds.some(//true/false. Проверяется весь массив значений на определенное значение. (Если хоть 1 id из массива содержит id нового списка -> не содержит*)
            () => existingIds.includes(item.id) // элемент массива равен айди перебираемого обьекта
          )
        )
      }  );

      return {
        ...state,
        list: state.list.concat(newFilteredList),
        isLoading: false,
        after: action.after,
      };

    case POSTLIST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case POST_TOGGLE_SAVE:
      return {
        ...state,
        list: state.list.map((item:IPost)=>{
          if(item.id === action.id){
            item.isSaved = !item.isSaved
          }
          return item
        })
      };
    case POSTCARD_TOGGLE_VISIBLE:
      return {
        ...state,
        // list: state.list.map((item:IPost)=>{//map оставляет паддинги, нужно менять стили карточек
        //   if(item.id === action.id){
        //     item.isVisible = !item.isVisible
        //   }
        list: state.list.filter((item:IPost)=>item.id !== action.id)//пока сделал чтоб удалялось
      };

    default:
      return state;
  }
}