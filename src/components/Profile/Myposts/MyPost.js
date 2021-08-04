import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
    return (
        <div>
            <div className="posts">
                <div>
                    <textarea></textarea>
                    <button>add Post</button>
                </div>
                <h1>posts</h1>
                <Post message ="hallo" like ="2" />
                <Post message ="hallo121" like ="5" />
            </div>
        </div>
    )
}

export default MyPost;