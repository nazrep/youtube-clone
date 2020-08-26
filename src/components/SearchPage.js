import React from "react";
import "../css/SearchPage.css";
import ChannelRow from "../components/ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";


function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon/>
        <h2>Filter</h2>
      </div>
      <hr/>
      <ChannelRow

        channel="PerzanTV"
        verified
        subs="1M"
        noOfVideos="125"
        description="Fledgling Junior Frontend Developer based in Skierniewice/Lodz. My older brother encouraged me to programming, thanks to him doing pages became my passion :) You might be interested in checking the list of my skills. Don't forget to have glimpse at my projects. Currently i'm looking for a new challenges so if you have once -
contact me 🙃"
      />
      <hr/>
    </div>
  )
};

export default SearchPage;