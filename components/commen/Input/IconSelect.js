import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useController } from 'react-hook-form';
import Select from "react-select";
import classNames from 'classnames';

const IconSelect = ({
	name,
	value,
	message,
	control,
	register,
	label,
	defaultValue,
	...rest
}) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: register,
		defaultValue: value || defaultValue,
	});
	return (
		<div className='input'>
			<label className='input__label' style={{display:'flex'}}>{label} :</label>

			<Select
				className={classNames('input__select', {
					input__error: error,
				})}
				dropdownClassName='input__select--dropdown'
				size='large'
				{...field}
				{...rest}
			/>
			{error && <span className='input__message'>{message}</span>}
		</div>
	);
};

IconSelect.propTypes = {
	children: PropTypes.any,
	control: PropTypes.any,
	errors: PropTypes.any,
	message: PropTypes.any,
	name: PropTypes.any,
	optionList: PropTypes.array,
	register: PropTypes.any,
	value: PropTypes.any,
};
export default IconSelect;
