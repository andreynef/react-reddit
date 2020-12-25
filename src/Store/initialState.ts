import {IPost} from "./Posts/postsActions";

export interface IComments {
  list:[],
  isLoading: boolean,
}

export interface ICommentModal {
  commentId: string,
  author: string,
  created: string,
  avatar: string,
  body: string,
}
export interface IPosts {
  list:[],
  after:string,
  isLoading: boolean,
  source:string,
}
export interface IProfileData {
  name: string;
  id: string;
  avaUrl: string;
  profileUrl: string;
  inbox_count: number;
}
export interface IProfile {
  loading: boolean,
  error: string,
  data: IProfileData,
}
export interface IInitialState {
  token:string,
  isAuth:boolean,
  bookmark:string,
  isPrivate:false,
  timeout:boolean,
  commentForm:string,
  searchInput:string,
  savedPosts:[],
  myPosts:[],
  seenPosts:[],
  commentedPosts:[],
  postModal:IPost,
  commentModal: ICommentModal,
  isAnswerOpen: boolean,
  profile:IProfile,
  posts:IPosts,
  comments: IComments,
}
//---------------------------------------------------------------------------------------
export const initialState: IInitialState = {
  token:'',
  isAuth:false,
  bookmark:'Просмотренное',
  isPrivate: false,
  timeout: false,
  commentForm:'',
  searchInput:'',
  savedPosts:[],
  myPosts:[],
  seenPosts:[],
  commentedPosts:[],
  postModal:{
    author: '',
    id: '',
    created: '',
    avatar: '',
    title: '',
    karma: 0,
    commentsAmount: 0,
    isSaved: false,
    isMyPost: false,
    isCommented: false,
    isSeen: false,
    isVisible: true,
    preview2: '',
    url:'',
    score:0,
    subreddit:'',
    thumbnail:'',
    permalink:'',
  },
  commentModal: {
    commentId: '',
    author: '',
    created: '',
    avatar: '',
    body: '',
  },
  isAnswerOpen: false,
  profile: {
    loading: false,
    error:'',
    data: {
      id:'',
      name: 'Аноним',
      avaUrl: '',
      profileUrl: '',
      inbox_count: 0,
    },
  },
  posts:{
    list:[],
    after:'',
    isLoading: false,
    source:'best',
  },
  comments: {
    isLoading: false,
    list:[]
  },
}
