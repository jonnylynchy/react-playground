import React from 'react';
import { shallow, render, mount, configure, renderProp } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Comp from './Comp';

configure({ adapter: new Adapter() });

describe('when <App /> renders', () => {
	// One common solution is to instantiate another wrapper for the inner component:
	it('should render <Comp /> with a passed message using .prop()', () => {
		const wrapper = shallow(<App />);
		const compWrapper = shallow(
			wrapper.find(Comp).prop('render')({ message: "Wow, that was easy." })
		);

		console.log('Using .prop("render"):\n', compWrapper.html())

		// works
		expect(compWrapper.text()).toEqual("Wow, that was easy.");

		// not ideal
		expect(compWrapper.html()).toMatchSnapshot();
	});

	it('should render <Comp /> with a passed message using .renderProp()', () => {
		const betterWrapper = shallow(<App />)
			.find(Comp)
			.renderProp('render')({ message: "foo foo magoo" });
		
		console.log('Using .renderProp():\n', betterWrapper.html());

		expect(betterWrapper.html()).toMatchSnapshot();
	});
});
