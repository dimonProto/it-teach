import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const USER_ERRORS = 'USER_ERRORS';


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching:false,
    isAuth: false,
    errors:[]
}


const authReducer = ( state = initialState, action ) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case USER_ERRORS:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email,isAuth,isConfirm) => ({type: SET_USER_DATA, payload:{id, login, email,isAuth,isConfirm}})

export const setError = (error) => ({type: USER_ERRORS, payload:error})

export const myData = () =>  async (dispatch) => {
        let response =  await usersAPI.getMe()
            if( response.data.resultCode === 0){
                let {id, login, email } = response.data.data
                dispatch(setAuthUserData(id,login,email,true,))
            }
}

export const login = (email,password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email,password, rememberMe)
        if( data.resultCode === 0){
            dispatch(myData())
        } else {
            dispatch(setError("Invalid credentials"))
        }

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
        if( data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false,))
        }
}

export default authReducer