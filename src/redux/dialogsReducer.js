
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
}


const dialogsReducer = ( state = initialState, action ) => {

    switch (action.type){
        case ADD_MESSAGE:
            let addNewMessage = {
                id: 5,
                message: state.newMessageText,
            };

            state.messagesData.push(addNewMessage)
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            break;
        default:
            return state;
    }
    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export  const updateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage:text})

export default dialogsReducer