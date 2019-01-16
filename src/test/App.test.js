import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Comp from '../Comp';

describe('when <App /> renders', () => {
	// One common solution is to instantiate another wrapper for the inner component:
	it('should render <Comp /> with a passed message using .prop()', () => {
		const wrapper = shallow(<App />);
		const compWrapper = shallow(
			wrapper.find(Comp).prop('render')({ message: "Wow, that was easy." })
		);

		console.log('Using .prop("render"):\n', compWrapper.debug())

		// works
		expect(compWrapper.text()).toEqual("Wow, that was easy.");

		// not ideal
		expect(compWrapper.html()).toMatchSnapshot();
	});

	it('should render <Comp /> with a passed message using .renderProp()', () => {
		const betterWrapper = shallow(<App />)
			.find(Comp)
			.renderProp('render')({ message: "foo foo magoo" });
		
		console.log('Using .renderProp():\n', betterWrapper.debug());

		expect(betterWrapper.html()).toMatchSnapshot();
	});

	it('should match json serialized snapshot', () => {
		const betterWrapper = shallow(<App />)
			.find(Comp)
			.renderProp('render')({ message: "foo foo magoo" });
		
		expect(betterWrapper).toMatchSnapshot();
	});
});
