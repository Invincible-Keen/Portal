import React, { Component } from 'react';
import SubTitle from '../components/SubTitle'

const CaseItem = () => (
	<div className="case-item">
		<div className="case-item-desc">
        	<h3>医院学校项目</h3>
        	<p>西安建筑科技大学、浙江温州心血管医院、福建福州省立医院、上海长海医院、上海长征医院、北京海军医...</p>
        	<a href="#/">了解详情&gt;</a>
      	</div>

      	<div className="case-item-img">
			<img src={require("../img/hospital.png")} alt="医院学校项目" />
      	</div>
	</div>
);

const CaseItemReverse = () => (
	<div className="case-item">
		<div className="case-item-img">
			<img src={require("../img/hospital.png")} alt="医院学校项目" />
      	</div>
		<div className="case-item-desc">
        	<h3>医院学校项目</h3>
        	<p>西安建筑科技大学、浙江温州心血管医院、福建福州省立医院、上海长海医院、上海长征医院、北京海军医...</p>
        	<a href="#/">了解详情&gt;</a>
      	</div>
	</div>
);

const Case = () => (
	<div className="block-content">
		<SubTitle title="案例展示" subTitle="CASE" />
      	<div className="case-items">
      		<CaseItem />
      		<CaseItemReverse />
      		<CaseItem />
      		<CaseItemReverse />
      	</div>
	</div>
);

export default Case;