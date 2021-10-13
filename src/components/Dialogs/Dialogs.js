import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Breadcrumb from "../Breadcrumbs";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/FormControls/FormsConrols";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit} >
            {props => {
                return <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field
                            name="newMessageBody"
                            placeholder="message"
                            component={Textarea}
                            type="textarea"
                            validate={composeValidators(required, maxLengthCreator(50))}
                        />
                    </div>
                    <div>
                        <button  type="submit">add Text</button>
                    </div>
                </form>
            }}
        </Form>
    )
}

const Dialogs = (props) => {
    const LIST = ['Home','Product','Page','Page2']

    const handleClick = (i) => {
            console.log( "active " + i)
    }

    let state = props.dialogsPage

    let dialogElement = state.dialogsData.map( (dialog) =>  <DialogItem name ={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messageElement = state.messagesData.map( (message) =>  <Message message={message.message} key={message.id}/>)

    let addNewMessage = (value) =>{
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                { dialogElement }
            </div>
            <div className={classes.messages}>
                { messageElement }
                {/*<textarea onChange={ onchangeMessageText } ref={ dialogEl } value={ props.dialogsPage.newMessageText }/>*/}

                {/*<button onClick={ onSendMessageClick } style ={{display:"block"}}>add text</button>*/}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
            <Breadcrumb list={LIST} onClick={ handleClick }/>
        </div>
    )
}

export default Dialogs;