

const BEST_FRIENDS = 'BEST_FRIENDS'
let initialState = {
    friends:[
        {id: 1, name: "Anrew"},
        {id: 2, name: "Anya"},
        {id: 3, name: "Valera"},
    ]
}

const navReducer = ( state = initialState, action ) => {
        switch (action.type){
            case BEST_FRIENDS:
                return {
                    ...state,
                }
        }
    return state;
}


export const setBestFriends = () => ({type:BEST_FRIENDS})

export default navReducer