import React from 'react';


const NewsListItem = () => (
	<div className="news-list-item">
      	<div className="news-list-item-left">
      		<a href="#/" target="_blank"><img src={require("../img/timthumb.jpg")} alt="正丰阀门 | 祝您国（zhong）庆（qiu）快乐" /></a>
      	</div>
      	<div className="news-list-item-right">
      		<h2><a href="#/" target="_blank">欧神威尔 | 祝您国（zhong）庆（qiu）快乐</a></h2>
      		<div>2017-09-29 浏览次数：102</div>
      		<p>十一长假，很开心吧，很激动吧！终于可以出去玩了！但是！这些地方千万别去！因为，去了也等于白去！去了你能欣赏的只有一样！人人...</p>
      	</div>
	</div>
);



const NewsList = () => (
	<div className="block-content news-list">
      	<NewsListItem />
      	<NewsListItem />
      	<NewsListItem />
      	<NewsListItem />
      	<NewsListItem />
      	<NewsListItem />
      	<NewsListItem />
	</div>
);

export default NewsList;