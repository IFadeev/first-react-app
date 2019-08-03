import React from 'react';

const Profile = () => {
  return (
    <section className="content">

              <div className="background-image">

              </div>

              <div className="profile">
                <div className="profile__img">
                
                  <img className="profile__img" src={require(".././vk.jpg")}></img>
                </div>

                <div className="profile__info">
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

               
              </div>

              <div className="posts-upload">


              </div>

              <div className="posts">

              </div>

            {/* <Content /> */} 
            </section>
  );
}

export default Profile;