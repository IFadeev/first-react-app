import React from 'react';
import profile from './Profileinfo.module.css'
import FriendsProfile from '../FriendsProfile/FriendsProfile';
import Posts from '../Posts/Posts';

const Profileinfo = (props) => {
  return (
    <div className={profile.profile}>

      <div className={profile.leftColumn}>

        <div className={profile.imgUpload}>
          <img className={profile.img} src={require("../../../vk.jpg")}></img>
        </div>

        <FriendsProfile frinedsData = {props.friendsData}/>


      </div>


      <div className={profile.rightColumn}>
        <div className={profile.info}>
          <div className="profile__info-name">
            <p>Fadeev Ivan</p>

          </div>
          <div className="profile__info-dateb">
            <span>Date of birth: </span>
            <span>27.03.1996</span>

          </div>
          <div className="profile__info-city">
            <span>Current city: </span>
            <span>Moscow</span>

          </div>
          <div className="profile__info-education">
            <span>Education: </span>
            <span>M.S. in Computer Science, RSUH</span>
          </div>
        </div>

        <Posts postData = {props.postData}
               addPost = {props.addPost}/>
      </div>
      {/* <Profile/> */}
    </div>
  );
}

export default Profileinfo;