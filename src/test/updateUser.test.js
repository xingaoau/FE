import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import { WrappedUpdateForm } from '../components/content/UpdateUser';

configure({adapter: new Adapter()});


describe('Test UpdateUser Component', () => {
  let props;

  beforeEach(() => {
    props = {
      user: {
        first_name: null,
        last_name: null,
        'date-picker': null
      }
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedUpdateForm {...props} />, div);
  });

  it('render antd form', () => {
    expect(mount(<WrappedUpdateForm {...props} />).find('form').exists()).toBe(true);
  });

  it('find input tag', () => {
    expect(mount(<WrappedUpdateForm {...props} />).find('input').length).toBe(3);
  });

  it('find button tag', () => {
    expect(mount(<WrappedUpdateForm {...props} />).find('button').length).toBe(1);
  });

});