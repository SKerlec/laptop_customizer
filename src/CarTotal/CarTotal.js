import React, { Component } from 'react';
import USCurrencyFormat from '../USCurrencyFormat';
import './carTotal.css';

function CartTotal({ selected }) {
	const total = Object.keys(selected).reduce(
		(acc, curr) => acc + selected[curr].cost,
		0
	)

	return (
		<div className="summary__total">
			<div className="summary__total__label">Total</div>
			<div className="summary__total__value">
				{USCurrencyFormat.format(total)}
			</div>
		</div>
	)
}

export default CartTotal;