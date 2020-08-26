import React from 'react';
import "../css/SideBarRow.css";


const SideBarRow = ({selected, Icon, Title}) => (
  <div className={`sideBarRow ${selected && "selected"}`}>
    <Icon className={"sideBarRow__icon"}/>
    <h2 className="sideBarRow__title">{Title}</h2>
  </div>
);

export default SideBarRow;
