import React from 'react';
import profile from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';  
import FriendsProfile from './FriendsProfile/FriendsProfile';
import PostsContainer from './Posts/PostsContainer';


const Profile = (props) => {
  return (
    <section className={profile.content}>
      <div className={profile.profile}>
        <div className={profile.leftColumn}>

          <div className={profile.imgUpload}>
            <img className={profile.img} src={require("../../vk.jpg")}></img>
          </div>

          <FriendsProfile frinedsData = {props.frinedsPage}/>

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

          <PostsContainer store = {props.store}
                          dispatch = {props.dispatch} />
        </div>
        {/* <Profile/> */}
        </div>

    </section>
  );
}
export default Profile;