import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comp extends Component {
	static propTypes = {
		render: PropTypes.func.isRequired,
	};

	state = {
		message: "You haven't clicked yet..."
	};

	handleClick = _ => {
		this.setState({
			message: "Clickity click click yo!"
		});
	};

	render() {
		return (
			<div style={{ height: '100%' }} onClick={this.handleClick}>
				{this.props.render(this.state)}
			</div>
		);
	}
}

export default Comp;