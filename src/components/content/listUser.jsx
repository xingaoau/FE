import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table, message, Divider, Input, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import AddUser from "./addUser";
import UpdateUser from './updateUser';
import { getUser, filterUser, deleteUser } from '../redux/actions';

// implement antd animation
const AnimationWrapper = ({ ...props }) => <QueueAnim duration={1000} component="tbody" {...props} />;

class ListUser extends PureComponent {

	componentDidMount() {
		this.props.getUserList();
		message.loading('loading')
	}

	handleSearch = (e) => {
		const value = e.target.value;
		this.props.filterUser(value);
	}	

	handleDelete = (index) => {
		try {
			this.props.deleteUser(index);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const columns = [
			{
				title: 'ID',
				dataIndex: 'id',
			},
			{
				title: 'First Name',
				dataIndex: 'first_name',
			},
			{
				title: 'Last Name',
				dataIndex: 'last_name',
			},
			{
				title: 'Date of birth',
				dataIndex: 'dob',
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span> 
							<UpdateUser user={record} />
						{/* <a href="#" onClick={ this.showModal }>Update</a> */}
						<Divider type="vertical" />
						<a href="#" onClick={ () => this.handleDelete(record.id) }>Delete</a>
					</span>
				),
			},
		];

		return (
			<div>
				<Input style={{ padding: 10, width: '300px', display: 'block'}} placeholder="Enter either first name or last name" onChange={this.handleSearch} addonAfter={<Icon type="search" />} />
				<AddUser />
				{
					// implement antd table element
					<Table 
						dataSource={this.props.users} 
						columns={columns} 
						rowKey="id" 
						components={{
							body: { wrapper: AnimationWrapper }
						}}
						pagination={false}
						size="large"
					/>
				}
			</div>
		);
	}
}

ListUser.propTypes = {
	getUserList: PropTypes.func,
	deleteUser: PropTypes.func,
	filterUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: () => {
      dispatch(getUser());
		},

		deleteUser: (index) => {
			dispatch(deleteUser(index));
		},

		filterUser: (value) => {
			dispatch(filterUser(value));
		}
  }
}

export const WrappedListForm = ListUser;

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
