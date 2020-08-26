import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationcsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";


const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon/>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="yt icon"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search something" type="text"/>
        <SearchIcon className="header__inputButton"/>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationcsIcon className="header__icon"/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Header