import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Breadcrumb from "../Breadcrumbs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let onSendMessage = () =>{
        // props.addMessage()
        props.store.dispatch( addMessageActionCreator())
    }
    let onchangeMessageText = (body) => {
        let changeMessage = updateNewMessageTextActionCreator(body)
        props.store.dispatch( changeMessage )

    }
    return <Dialogs updateNewMessageText={onchangeMessageText} sendMessage={onSendMessage} dialogsPage={state}/>
}

export default DialogsContainer;