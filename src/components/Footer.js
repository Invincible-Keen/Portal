import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<footer>
			   <div className="footer-container">
			        <div className="inner-footer-container">
			            <div className="footer-block">
			            	<h3>在线留言</h3>
			            	<div className="message">
							    <p><input type="text" className="" placeholder="您的称呼" /></p>
							    <p><input type="text" className="" placeholder="您的联系方式" /></p>
							    <p><textarea rows="5" className="" placeholder="留言内容"></textarea></p>
							    <p><button className="btn">发送</button></p>
							</div>
			            </div>
			            <div className="footer-block">
			            	<h3>联系我们</h3>
			            	<ul className="contact-info">
						    	<li><i className="fa fa-phone" aria-hidden="true"></i>上海电话：021-39597777</li>
							  	<li><i className="fa fa-phone" aria-hidden="true"></i>集团电话：0515-89188888</li>
							  	<li><i className="fa fa-fax" aria-hidden="true"></i>集团传真：0515-89186677</li>
							  	<li><i className="fa fa-location-arrow" aria-hidden="true"></i>公司地址：江苏省滨海县世纪大道99号</li>
							  	<li><i className="fa fa-location-arrow" aria-hidden="true"></i>总部地址：上海市嘉定区曹安公路3999号</li>
							</ul>
			            </div>
			            <div className="footer-block">
			            	<h3>关注我们</h3>
			            	<ul className="follow-info">
						    	<li><i className="fa fa-weibo" aria-hidden="true"></i>微博</li>
							  	<li><i className="fa fa-weixin" aria-hidden="true"></i>微信</li>
							  	<li><i className="fa fa-qq" aria-hidden="true"></i>QQ</li>
							</ul>
			            </div>
			        </div>
			        <div className="lower-footer-block">
			            <span className="copyright">版权所有© 欧神威尔集团 1991-2017 苏ICP备17033992号</span>
			        </div>
			    </div>
			</footer>
		)
	}
}

export default Footer;