import React from 'react';
import SideBarRow from "../components/SideBarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import OnDemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "../css/Sidebar.css"

const SideBar = () => (
  <div className="sideBar">
    <SideBarRow selected Icon={HomeIcon} Title="Home"/>
    <SideBarRow Icon={WhatshotIcon} Title="Trending"/>
    <SideBarRow Icon={SubscriptionsIcon} Title="Subcriptions"/>
    <hr/>
    <SideBarRow Icon={VideoLibraryIcon} Title="Library"/>
    <SideBarRow Icon={HistoryIcon} Title="History"/>
    <SideBarRow Icon={OnDemandVideoIcon} Title="Your Videos"/>
    <SideBarRow Icon={WatchLaterIcon} Title="Watch Later"/>
    <SideBarRow Icon={ThumbUpAltOutlinedIcon} Title="Liked Video"/>
    <SideBarRow Icon={ExpandMoreOutlinedIcon} Title="Show more"/>
    <hr/>
  </div>
);

export default SideBar;
