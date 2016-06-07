import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import Vote from './Vote.jsx'

describe('package test', () => {
  it('should render', () => {
    const post = { }; //FIXME
    const user = null; //FIXME
    const wrapper = shallow(<Vote />);
    chai.assert(wrapper.hasClass('vote'));
  });
});
