import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 145 ? description.substr(0, 120) + `...` : description; /* 145 is the minimun characters to short the paragrapgh */
    const postTitle = title.length > 30 ? title.substr(0, 30)  + `...` : title;
  return (
    <article className="posts">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem