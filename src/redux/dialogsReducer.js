
const ADD_MESSAGE = 'ADD-MESSAGE';


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
    ]
}


const dialogsReducer = ( state = initialState, action ) => {

    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [ ...state.messagesData,{id: 5,message: action.newMessageBody}],
            }

        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE,newMessageBody})

export default dialogsReducer