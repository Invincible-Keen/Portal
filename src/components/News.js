import React, { Component } from 'react';
import SubTitle from '../components/SubTitle'

const NewsItem = () => (
	<div className="news-item">
		<div className="news-item-time">
			<div className="news-item-month">06</div>
			<div className="news-item-date">16</div>
		</div>
		<div className="news-item-content">
			<h3><a className="" href="/" target="_blank">扬州——红山行</a></h3>
			<p className="">群策群力是团队的力量，披荆斩棘突破人生的寂静岭；高歌猛进是执行的力量，一往无前攀上事业的最巅峰。四月，迎着春风，正丰集团员工前往扬州红山体育公园展开为期两天的拓展训练活动。旨在让公司员...</p>
		</div>
	</div>
);


const News = () => (
	<div className="block-content">
		<SubTitle title="企业新闻" subTitle="NEWS" />
      	<div className="news">
      		<NewsItem />
      		<NewsItem />
      		<NewsItem />
      		<NewsItem />
      		<NewsItem />
      		<NewsItem />
      	</div>
	</div>
);

export default News;