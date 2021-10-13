import React from "react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {

        profilePage:{
            postsData: [
                {id: 1, message: "halloIndex", like:2},
                {id: 2, message: "hallo121", like:5}
            ],
            newPostText: 'it-kamasutra'

        },

        dialogsPage:{
            dialogsData: [
                {id: 1, name:"Anrew"},
                {id: 2, name:"Vitya"},
                {id: 3, name:"Valera"},
                {id: 4, name:"Anya"},
            ],
            messagesData:[
                {id: 1, message: "Hay are you"},
                {id: 2, message: "Hay are you Bill"},
                {id: 3, message: "Hay are you Pedro"},
                {id: 4, message: "Hay are you Vitock"},
            ],
            newMessageText: 'Halo'
        },
        navPage:{
            friends:[
                {id: 1, name: "Anrew"},
                {id: 2, name: "Anya"},
                {id: 3, name: "Valera"},
            ]
        },




    },
    _rerenderTree() {
        console.log('changed')
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderTree = observer
    },
    dispatch( action ) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.navPage = dialogsReducer(this._state.navPage,action)
        this._rerenderTree(this._state)

    },


}





export default store;