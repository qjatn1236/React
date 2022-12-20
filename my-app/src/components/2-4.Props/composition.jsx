import React from 'react';

function Welcome(props) {
	return <h1> Hi , {props.name}</h1>;
}

export default function composition(props) {
	return (
		<div>
			{props.name}
			<br />
			{props.children}
			<br />
			<Welcome name='jimmy' />
		</div>
	);
}
