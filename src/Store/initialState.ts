import {ProfileState} from "./Profile/profileReducer";

export interface IinitialState {
  token:string,
  timeout:boolean,
  commentForm:string,
  profile: ProfileState,
  posts:IinitialStatePosts,
}
export interface IinitialStatePosts {
  list:[],
  after:string,
  isLoading: boolean,
}

export const initialState: IinitialState = {
  token:'',
  timeout: false,
  commentForm:'',
  profile: {
    loading: false,
    error:'',
    data: {},
  },
  posts:{
    list:[],
    after:'',
    isLoading: false,
  }
}
