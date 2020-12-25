import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileRequestThunk} from "../Store/Profile/profileActions";
import {IInitialState, IProfileData} from "../Store/initialState";

// Вся Асинхронность ушла в Store.

export function useUserData () {//возвращает все данные о юзере из Store.
  const dispatch = useDispatch();

  const data = useSelector<IInitialState, IProfileData>(state => state.profile.data)//достать данные из store
  const token = useSelector<IInitialState>(state => state.token)//достать токен из store
  const loading = useSelector<IInitialState,boolean>(state => state.profile.loading)//достать статус загрузки из store
  // const isAuth = useSelector<IInitialState, boolean>(state => state.profile.isAuth)
  const profileUrl = useSelector<IInitialState, string>(state => state.profile.data.profileUrl)


  useEffect(()=>{//1раз без токена, 2раз с токеном.
    if (!token) return;
    dispatch(profileRequestThunk())//запрос в редукс о реквесте асинхронных данных с Reddit. Токен не пробрасываем тк он там тоже беретса из стора.
  },[token])

  return {
    data,
    loading,
    profileUrl,
    // isAuth,
  }
}



// const [data, setData] = useState<IProfileData>({});//создание своего стейта
// const token = useContext(tokenContext);//добавлен еще хук чтобы было все вместе связанное с UserData и не нужно передавать token в useUserData (token).
// const [token] = useToken();//достать токен из windows ('' или 'токен')
