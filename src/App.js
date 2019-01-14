import React, { Component } from 'react';
import Comp from './Comp';

import './App.css';

class App extends Component {
	render() {
		return (
			<div style={{ height: '100%' }}>
				<Comp
					render={({ message }) => (
					// The render prop gives us the state we need
					// to render whatever we want here.
					<h1>
						{ message }
					</h1>
					)}
				/>
			</div>
		);
	}
};

export default App;
