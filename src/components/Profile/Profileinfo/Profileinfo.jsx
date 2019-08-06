import React from 'react';
import profile from './Profileinfo.module.css'

const Profileinfo = () => {
  return (
    <div className={profile.profile}>
      <div className={profile.img}>

        <img className={profile.img} src={require("../../../vk.jpg")}></img>
      </div>

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


      {/* <Profile/> */}
    </div>
  );
}

export default Profileinfo;