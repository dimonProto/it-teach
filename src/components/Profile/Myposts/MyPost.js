import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'
import Accordion from "../../Accordeon/Accordeon";
import Button from "../../Button";
import ButtonSearch from "../../Button/ButtonImg";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsConrols";



const AddNewPost = (props) => {

    return (
        <Form onSubmit={props.onSubmit}>
            { props =>{
                return (
                    <form onSubmit={props.handleSubmit}>
                        <Field
                            name={'newPostBody'}
                            type={'textarea'}
                            component={Textarea}
                            placeholder={'add Post'}
                            validate={composeValidators(required, maxLengthCreator(18))}
                        />
                        <button type="submit">Add post</button>
                    </form>
                )
            }}
        </Form>
    )
}

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


const MyPost = React.memo(props => {

    let PostElements = [...props.massPost].reverse().map( p => <Post message = { p.message } like = { p.like } key={p.id} />)



    let addPost = (value) => {
        props.addPost(value.newPostBody)
    }



    const ButtonAlert = () => {
        alert("work")
    }
    return (
        <div>

            <div className={classes.posts}>

                 <AddNewPost onSubmit={addPost}/>

                <h1>posts</h1>
                { PostElements }
                <Accordion list={ list }/>
                <Button  text='click me' className='green' onClick={ButtonAlert} icon={ButtonSearch} rightIcon/>
            </div>
        </div>
    )
})



export default MyPost;