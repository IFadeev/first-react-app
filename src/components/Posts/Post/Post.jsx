import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
  return (
    <div className={post.block}>
      <div className={post.item}>
        <div className={post.item__wrapper}>

          <div className={post.img}>
            <img src={require("../../../post-item-img.png")}></img>
          </div>

          <header className={post.header}>
            <span className={post.name}>{props.name}</span>
            <div className={post.date_post}>{props.date}</div>
            <div className={post.message}>
              <span>{props.message}</span>
            </div>
          </header>

        </div>

        <div className={post.like__wrapper}>
          <span>Like</span>
          <div>{props.likeCount}</div>
        </div>

      </div>
    </div>
  );
}

export default Post;
