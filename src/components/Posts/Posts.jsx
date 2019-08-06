import React from 'react';
import posts from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  let postData = [
    {
      id: 1,
      name: 'Ivan',
      surname: 'Fadeev',
      message: 'ОуО!',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'Hello, world!',
      date: '04.08.19'
    },
    {
    id: 2,
      name: 'Ivan',
      surname: 'Fadeev',
      message: 'ОуО!',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'Another one!',
      date: '04.08.19',
    },
    {
      id: 3,
      name: 'Ivan',
      surname: 'Fadeev',
      message: 'ОуО!',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'I learning REACT!!',
      date: '04.08.19',
    },
  ];

  return(
    <div className={posts.wall}>
      <div className={posts.upload}>
        <div className={posts.wall__field }>
          <textarea className={posts.field} placeholder="What's up?" columns="5" rows="2"></textarea>
        </div>
        <button>Post</button>
      </div>

      <Post name = {postData[0].fullName} date ={postData[0].date} message={postData[0].message}/>
      <Post name = {postData[1].fullName} date ={postData[1].date} message={postData[1].message}/>
      
    </div>
  );
}

export default Posts;
