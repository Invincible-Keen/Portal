import React, { Component } from 'react';
import SubTitle from '../components/SubTitle'

const About = () => (
	<div className="block-content">
		<SubTitle title="关于我们" subTitle="ABOUT" />
      	<div className="about">
      		<div className="about-left">
      			<img src={require("../img/about.jpg")} alt=""></img>
      			<p>欧神威尔集团一贯坚持 “靠科技创正丰品牌，凭质量赢客户满意” 的企业经营宗旨，获得良好的市场信誉和稳定的客户网，公司资信等级始终为“AAA”级。我们拥有完善的销售体系和售后服务体系，产品销售遍布全国，部分产品远销欧洲、中东及东南亚等国家和地区。正丰智能是正丰阀门集团在供热和制冷系统物联网领域的探索和应用，其中包括远程水力平衡调试、能源合同管理以及用户习惯化节能舒适体验。正丰阀门集团真诚希望与您合作，共同把中国阀门产品的制造和应用推向一个崭新的阶段。绿色正丰，让地球留在春天！ 我们一直在努力！</p>
      		</div>
      		<div className="about-right">
	      		<div>	      			
	      			<div className="bg-grey"></div>
	      			<div className="bg-blue"></div>
	      		</div>
	      		<div>
	      			<div className="bg-blue"></div>
	      			<img src={require("../img/about4.jpg")} alt=""></img>
	      		</div>
      		</div>
      		
      	</div>
	</div>
);

export default About;