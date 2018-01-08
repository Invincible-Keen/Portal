import React, { Component } from 'react';
import SubTitle from '../components/SubTitle'
import Background from '../img/prodbg.jpg';

const Product = () => (
	<div className="product">
		<a href="#/"><img src={require("../img/prod.jpg")} alt=""></img><p>水系列阀门</p></a>
	</div>
);

/*style={{'backgroundImage': `url(${Background})`}}*/
const Products = () => (
	<div className="block-content" style={{'backgroundColor': '#f8fcff'}}>	
		<div className="products">
			<SubTitle title="产品中心" subTitle="PRODUCTS" />
	      	<div className="products-items">
	      		<Product />
	      		<Product />
	      		<Product />
	      		<Product />
	      	</div>
		</div>
	</div>
);

export default Products;