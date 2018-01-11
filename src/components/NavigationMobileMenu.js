import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e){
	console.log('click ', e);
}

const NavigationMobileMenu = ({item, isEnglish}) => (
	<Menu onClick={handleClick} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
		{
			item.subItems != null &&
				<SubMenu title={<span><Icon type="home" /><a href={item.url}>{ isEnglish? item.eName : item.name }</a></span>}>
				{
					item.subItems.map((s, i) => {
						return(<Menu.Item key={i}><a href={s.url}>{isEnglish? s.eName : s.name}</a></Menu.Item>);
					})
				}
		    </SubMenu>
		}
	    {
	    	item.subItems == null &&
	    	<Menu.Item><span><Icon type="home" /><a href={item.url}>{ isEnglish? item.eName : item.name }</a></span></Menu.Item>
	    }
	</Menu>
);

export default NavigationMobileMenu;