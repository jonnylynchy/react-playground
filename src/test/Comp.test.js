import React from 'react';
import { shallow } from 'enzyme';

import Comp from '../Comp';

const TestComp = () => <div>Test Component</div>;

describe('when <Comp /> renders', () => {

	it('should render some markup and a component', () => {
		const renderFunc = state =>
			<React.Fragment>
				<h1>{state.message}</h1>
				<TestComp />
			</React.Fragment>;

		const wrapper = shallow(<Comp render={renderFunc} />);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should render something different on click', () => {
		const renderFunc = state =>
			<React.Fragment>
				<h1>{state.message}</h1>
			</React.Fragment>;

		const wrapper = shallow(<Comp render={renderFunc} />);
		wrapper.find('div').simulate('click');

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should match json serialized snapshot', () => {
		const renderFunc = state =>
			<React.Fragment>
				<h1>{state.message}</h1>
				<TestComp />
			</React.Fragment>;

		const wrapper = shallow(<Comp render={renderFunc} />);

		expect(wrapper).toMatchSnapshot();
	});

});