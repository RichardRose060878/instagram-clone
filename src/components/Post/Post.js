import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './Post.css'

function Post({ username, caption, imageURL }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post__avatar"
                    alt="Richard Rose"
                    src=""
                />

                <h3>{username}</h3>
            </div>
            
            <img className="post__image" src={imageURL} alt="" />

            <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>
        </div>
    )
}

export default Post
