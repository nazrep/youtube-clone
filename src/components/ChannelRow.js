import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "../css/ChannelRow.css";


function ChannelRow({channel, subs, noOfVideos, description, verified}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo"
              alt={channel}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGa2G_4APKQmQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=KnZEdzYkLQ36aO_EQv5I90vDP9xba0mBrvOszOHyHVE"
      />
      <div className="channelRow__text">
        <h4>{channel} {verified && <VerifiedIcon/>}</h4>
        <p>{description}</p>
        <p>{subs} subscribers · {noOfVideos} videos</p>
      </div>
    </div>
  )
};

export default ChannelRow;