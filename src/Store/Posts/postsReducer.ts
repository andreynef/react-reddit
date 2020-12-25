import {Reducer} from "redux";
import {
  IPost,
  POSTLIST_REQUEST, POSTLIST_REQUEST_ERROR, POSTLIST_REQUEST_SUCCESS,
  PostListRequestAction, PostListRequestErrorAction,
  PostListRequestSuccessAction
} from "./postsActions";
import {RootStateOrAny} from "react-redux";
import {IinitialState, IinitialStatePosts} from "../initialState";


type PostsActions =
  PostListRequestSuccessAction |
  PostListRequestAction |
  PostListRequestErrorAction;

export const postsReducer: Reducer<RootStateOrAny, PostsActions> = (state, action) => {
  switch (action.type) {

    case POSTLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case POSTLIST_REQUEST_SUCCESS:
      //фильтрация от повторов
      const existingIds = state.list.map((item: { id: string })=>item.id);//достать все айди из существующего списка.(для простоты перебора в some)
      const newFilteredList = action.listArr.filter(item => {//фильтр нового приходящего списка от повторных постов (по id)
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
    default:
      return state;
  }
}