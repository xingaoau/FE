import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import { WrappedAddForm } from '../components/content/addUser';

configure({adapter: new Adapter()});


describe('Test AddUser Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedAddForm />, div);
  });

  it('render antd form', () => {
    expect(mount(<WrappedAddForm />).find('form').exists()).toBe(true);
  });

  it('find input tag', () => {
    expect(mount(<WrappedAddForm />).find('input').length).toBe(3);
  });

  it('find button tag', () => {
    expect(mount(<WrappedAddForm />).find('button').length).toBe(1);
  });

});
