import React from 'react';

const NavigationItem = ({item, isEnglish}) => (
	<li className="navigation-item">
		<a href={item.url} className="navigation-item-content">{isEnglish? item.eName : item.name}</a>
		{
			item.subItems != null &&
			<ul className="sub-navigation">
				{
					item.subItems.map((s, i) => {
						return(<li key={i}><a href={s.url}>{isEnglish? s.eName : s.name}</a></li>);
					})
				}
			</ul>   
		}
		
	</li>
);

export default NavigationItem;