import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Header extends PureComponent {
	render() {
		return (
			<div style={{ padding: 10, width: '120px', display: 'inline-block' }}>
				<Button type="primary">
					<Link to="/add">Add user</Link>
				</Button>
			</div>
		)
	}
}

export default Header;
