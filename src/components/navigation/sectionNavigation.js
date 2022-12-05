import React from "react";
import './sectionNavigation.scss';
import logo from '../../assets/image/logo/space-ship.png';
import home from '../../assets/image/nav/home.png'
import chat from '../../assets/image/nav/dialogue.png'
import group from '../../assets/image/nav/group.png'
import profile from '../../assets/image/nav/user.png'

function SectionNavigation(){

    return(
        <section className="header">
              <div className="header__wrapper">       
                <div className="header__logo">
                    <div className="header__logo-img">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="header__logo-text">
                        <h4>Dwitter</h4>
                    </div>
                </div>

                <div className="header__navigation">
                    <ul>
                        <li><img src={home} alt="home"></img><span>Home</span></li>
                        <li><img src={chat} alt="chat"></img><span>Chat</span></li>
                        <li><img src={group} alt="group"></img><span>Group</span></li>
                        <li><img src={profile} alt="profile"></img><span>Profile</span></li>
                    </ul>
                    <button type="button">Dwitt</button>
                </div>
              </div>
        </section>
    )
}

export default SectionNavigation;