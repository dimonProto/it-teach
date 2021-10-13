
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


// const MyPostContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//                 }
//                     return (
//                         <MyPost
//                             updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             massPost={state.profilePage.postsData}
//                             newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </storeContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
   return {
       massPost:state.profilePage.postsData,
       newPostText:state.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) =>{
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;