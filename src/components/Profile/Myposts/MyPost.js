import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'
import Accordion from "../../Accordeon/Accordeon";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import Button from "../../Button";
import ButtonSearch from "../../Button/ButtonImg";



const list = [
    {
        category: 'test',
        text: {
            title: 'title',
            desc: 'test text'
        }
    },
    {
        category: 'test 2',
        text: [
            {
                title: 'title',
                desc: 'test text'
            },
            {
                title: 'title 2',
                desc: 'test text 2'
            }
        ]
    }
]


const MyPost = (props) => {

    let PostElements = props.massPost.map( p => <Post message = { p.message } like = { p.like } />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // let spreadElements = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        // let spreadElements = updateNewPostTextActionCreator(text);
        // props.dispatch( spreadElements )
    }

    const ButtonAlert = () => {
        alert("work")
    }
    return (
        <div>

            <div className={classes.posts}>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
                    <button onClick={ addPost }>add Post</button>
                </div>
                <h1>posts</h1>
                { PostElements }
                <Accordion list={ list }/>
                <Button  text='click me' className='green' onClick={ButtonAlert} icon={ButtonSearch} rightIcon/>
            </div>
        </div>
    )
}

export default MyPost;