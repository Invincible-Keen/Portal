import React, { Component } from 'react';

const SubTitle = (props) => (
	<div className="sub-title">
        <h2>{props.title}</h2>
        <small>{props.subTitle}</small>
        <img className="boundary" src={require("../img/boundary.png")} />
  	</div>
);

export default SubTitle;