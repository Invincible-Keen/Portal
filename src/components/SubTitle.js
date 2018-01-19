import React from 'react';

const SubTitle = (props) => (
	<div className="sub-title">
        <h2>{props.title}</h2>
        {props.subTitle && <small>{props.subTitle}</small>}        
        <img className="boundary" src={require("../img/boundary.png")} alt="" />
  	</div>
);

export default SubTitle;