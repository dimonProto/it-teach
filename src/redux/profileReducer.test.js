import React  from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    postsData: [
        {id: 1, message: "halloIndex", like:2},
        {id: 2, message: "hallo121", like:5}
    ]
}

test('length post', () => {
    let action  = addPostActionCreator("testovuy test");

    let newState = profileReducer(state,action)

    expect(newState.postsData.length).toBe(3)
});

test('delete one post', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action)
     expect(newState.postsData.length).toBe(1)
});