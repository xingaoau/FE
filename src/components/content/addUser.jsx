import React, { PureComponent, Fragment } from 'react';
import { connect }from 'react-redux';
import { 
	Form,
	Input, 
	DatePicker,
	Button
} from 'antd';
import PropTypes from 'prop-types';

import { addUser } from '../redux/actions';

class AddUser extends PureComponent {

	// pass antd form check, call submit new user
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.submitNewUser({
					id: this.props.users.slice(-1).pop().id+1,
					first_name: values.first_name,
					last_name: values.last_name,
					dob: values['date-picker'].format('YYYY-MM-DD')
				});
			}
		});
	};

	render() {
		// use antd form component
		const { getFieldDecorator } = this.props.form;

		return (
			<Fragment>
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<Form.Item label="First Name">
						{getFieldDecorator('first_name', {
							rules: [{ required: true, message: 'Please input first name!', whitespace: true }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Last Name">
						{getFieldDecorator('last_name', {
							rules: [{ required: true, message: 'Please input last name!', whitespace: true }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Date of birth">
						{getFieldDecorator('date-picker', {
							rules: [{ type: 'object', required: true, message: 'Please select time!' }],
						})(<DatePicker />)}
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">Add a User</Button>
					</Form.Item>
				</Form>
			</Fragment>
		)
	}
}

// proptype check
AddUser.propTypes = {
	submitNewUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// redux change dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		submitNewUser: (user) => {
			dispatch(addUser(user));
		}
	}
}

// export component for testing purpose
export const WrappedAddForm = Form.create()(AddUser);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(WrappedAddForm);
