'use client';

import { Check, Eye, EyeOff, Search } from 'lucide-react';
import { text } from 'node:stream/consumers';
import React, { useEffect, useRef, useState } from 'react';
import Each from '../Each';

const variants = {
	light: {
		label: 'text-humo/20 peer-focus/input:text-humo peer-valid/input:text-humo',
		input:
			'text-humo border-niagara-300 focus:border-niagara-500 valid:border-niagara-500',
	},
	dark: {
		label:
			'text-black/40 peer-focus/input:text-black  peer-valid/input:text-black',
		input:
			'border-niagara-200 focus:border-niagara-500 valid:border-niagara-500',
	},
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	variant?: 'light' | 'dark';
	type?: 'email' | 'text' | 'password';
}
interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}
interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
	options: { label: string; value: string }[];
	select?: string;
}

export function Input({
	label,
	variant = 'light',
	className,
	id,
	type = 'text',
	...props
}: InputProps) {
	const [show, setShow] = useState(false);

	const getType = (type: string) => {
		if (type == 'password') {
			return show ? 'text' : 'password';
		} else {
			return type;
		}
	};

	return (
		<div className="flex flex-col w-auto">
			<div className="relative">
				<input
					id={id}
					name={id}
					type={getType(type)}
					className={` bg-inherit outline-none border-b-2 peer/input ${variants[variant].input}  ${className}`}
					{...props}
				/>
				<label
					htmlFor={id}
					className={`absolute top-1/2 left-0 -translate-y-1/2 ${variants[variant].label}
					peer-focus/input:top-0 peer-focus/input:left-3 peer-focus/input:text-xs peer-focus/input:-translate-y-full 
					peer-valid/input:top-0 peer-valid/input:left-3 peer-valid/input:text-xs peer-valid/input:-translate-y-full 
					transition-all duration-300`}
				>
					{label}
				</label>
				{type === 'password' && (
					<button
						type="button"
						className={`absolute right-0 top-1/2 -translate-y-1/2 ${
							variant == 'light' ? 'text-humo/65' : 'text-base/65'
						}`}
						onClick={() => setShow(!show)}
					>
						{show ? <Eye size={20} /> : <EyeOff size={20} />}
					</button>
				)}
			</div>
		</div>
	);
}

export function Checkbox({ label, className, id, ...props }: InputProps) {
	const checkRef = useRef<HTMLInputElement | null>(null);

	const [isCheck, setIsCheck] = useState(false);

	const hanleCheck = () => {
		const checkCurrent = checkRef.current;
		if (checkCurrent) {
			setIsCheck(checkCurrent.checked);
		}
	};

	return (
		<label className="flex max-w-max items-center gap-2 cursor-pointer h-fit">
			<input
				type="checkbox"
				name={id}
				id={id}
				className="hidden peer/checkbox"
				{...props}
				ref={checkRef}
				onChange={hanleCheck}
			/>
			<div
				className={`grid place-content-center border-2 rounded-sm border-tuatara size-4 peer-checked/checkbox:bg-tuatara transition-colors duration-300 ${className}`}
			>
				<span
					className={`${
						isCheck ? 'opacity-100' : 'opacity-0'
					} transition-opacity duration-300 `}
				>
					<Check size={13} color="#fff" />
				</span>
			</div>
			<span>{label}</span>
		</label>
	);
}

export function InputSearch() {
	return (
		<div className="flex w-fit">
			<input
				type="text"
				className="rounded-l-full border-2 border-niagara-500 p-1 px-2 w-96"
				placeholder="Buscar"
			/>
			<button className="rounded-r-full bg-gray-100 hover:bg-gray-300 px-4 border-2 border-niagara-500 border-l-0 transition-colors">
				<Search />
			</button>
		</div>
	);
}

export function TextArea({ label }: TextAreaProps) {
	return (
		<div className="w-full">
			<h2 className="text-xs">{label}</h2>
			<textarea
				className="w-full border border-black p-2 rounded-lg resize-none"
				rows={6}
			/>
		</div>
	);
}

export default function RadioGroup({
	options,
	className,
	id,
	select = '',
	...props
}: RadioGroupProps) {
	const [selectedValue, setSelectedValue] = useState(select);
	const handleChange = (value: string) => {
		// console.log(value);

		setSelectedValue(value);
	};
	return (
		<>
			<Each
				of={options}
				render={(radio, i) => (
					<label key={i}>
						<input
							type="radio"
							name={id}
							id={`${id}-${i}`}
							className="hidden peer/check"
							value={radio.value}
							{...props}
							checked={selectedValue == radio.value}
							onChange={() => handleChange(radio.value)}
						/>
						<span
							className={`border-2 border-gray-300 p-2 rounded-lg peer-checked/check:bg-niagara-300 ${className}`}
						>
							{radio.label}
						</span>
					</label>
				)}
			/>
		</>
	);
}
