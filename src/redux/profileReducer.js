import * as axios from "axios";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    postsData: [
        {id: 1, message: "halloIndex", like:2},
        {id: 2, message: "hallo121", like:5}
    ],
    profile:null,
    status: ''

}

const profileReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostBody,
                like: 0
            };
            return {
                ...state,
                postsData: [...state.postsData,newPost],
                newPostText: ''
            }

            // let stateCopy = {...state}
            // stateCopy.postsData = [...state.postsData]
            // stateCopy.postsData.push(newPost)
            // stateCopy.newPostText = ''
            // return stateCopy;


        case SET_USER_PROFILE :{
            return {...state,profile:action.profile}
        }
        case SET_STATUS :{
            return {
                ...state,
                status:action.status
            }
        }
        case DELETE_POST :{
            return {
                ...state,
                postsData: state.postsData.filter((p)=> p.id != action.postId)
            }
        }

        default:
            return state;
    }
    return state;
}
export const addPostActionCreator = (newPostBody) =>({type: ADD_POST,newPostBody})

export const setUsersProfile = (profile) =>({type: SET_USER_PROFILE,profile})

export const setStatus = (status) =>({type: SET_STATUS,status})

export const deletePost = (postId) =>({type: DELETE_POST,postId})



export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUsersProfile(response.data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
               dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer