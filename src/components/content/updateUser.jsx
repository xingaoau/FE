import React, { Component, Fragment } from 'react';
import { connect }from 'react-redux';
import { 
	Form,
	Input, 
	DatePicker,
	Button
} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

import { updateUser } from '../redux/actions';

class UpdateUser extends Component {

	componentDidMount() {
		// grab store value, set in antd form
		this.props.form.setFieldsValue({
			first_name: this.props.user.first_name,
			last_name: this.props.user.last_name,
			'date-picker': moment( this.props.user.dob, 'YYYY/MM/DD' )
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.submitUpdateUser({
					first_name: values.first_name,
					last_name: values.last_name,
					dob: values['date-picker'].format('YYYY-MM-DD'),
					id: this.props.user.id
				});
			}
		});
	};
    
	render() {
		// implement antd form element
		const { getFieldDecorator } = this.props.form;
        
		return (
			<Fragment>
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<Form.Item label="First Name">
						{getFieldDecorator('first_name', {
							rules: [{ required: true, message: 'Please input first name!', whitespace: true }],
						})(<Input/>)}
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
						<Button type="primary" htmlType="submit">Update User</Button>
					</Form.Item>
				</Form>
			</Fragment>
		)
  }
}

UpdateUser.propTypes = {
	submitUpdateUser: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitUpdateUser: (user) => {
			dispatch(updateUser(user));
		}
	}
}

// export component for testing purpose
export const WrappedUpdateForm = Form.create()(UpdateUser);

// connect to store
export default connect(null, mapDispatchToProps)(WrappedUpdateForm);
