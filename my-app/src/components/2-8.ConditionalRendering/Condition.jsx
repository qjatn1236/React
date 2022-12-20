import React from 'react';

function UserGreeting(props) {
	return (
		<h1>
			{props.name && `${props.name},`} Welcome{' '}
			{props.count ? `It's ${props.count} times` : ''}
		</h1>
	);
}

function GuestGreeting(props) {
	return <h1>Please Sign up.</h1>;
}

function Greeting(props) {
	return props.isLoggedIn ? (
		<UserGreeting name='Baams' count={0} />
	) : (
		<GuestGreeting />
	);
}

export default function Condition() {
	const isLoggedIn = true;
	return (
		<div>
			<Greeting isLoggedIn={isLoggedIn} />
		</div>
	);
}
