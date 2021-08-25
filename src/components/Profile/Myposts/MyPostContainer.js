import React from 'react'

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";




const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch( action )
    }


    return (
      <MyPost
          updateNewPostText={ onPostChange }
          addPost={addPost}
          massPost={state.profilePage.postsData}
          newPostText={state.profilePage.newPostText}
      />
    )
}

export default MyPostContainer;