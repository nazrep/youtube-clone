import React, {useState} from "react";
import "../css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationcsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";


function Header() {

  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon/>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="yt icon"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search something"
          type="text"
        />
        <Link to={`/Search/${inputSearch}`}>
          < SearchIcon className="header__inputButton"/>
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationcsIcon className="header__icon"/>
        <Avatar
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGa2G_4APKQmQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=KnZEdzYkLQ36aO_EQv5I90vDP9xba0mBrvOszOHyHVE"
        />
      </div>
    </div>
  )
}

export default Header