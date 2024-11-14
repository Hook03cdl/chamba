'use client';

import { Check, Eye, EyeOff, Search } from 'lucide-react';
import React, { useRef, useState } from 'react';
import Each from '../Each';
import { ChambaProps } from '@/lib/interfaces/interface';
import Fuse from 'fuse.js';
import Popover, { PopLink } from './Popover';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import ClickOut from './Clickout';

const variants = {
	light: {
		label: 'text-humo/20 peer-focus/input:text-humo peer-valid/input:text-humo',
		input: 'text-humo border-niagara-300 focus:border-niagara-500',
	},
	dark: {
		label:
			'text-black/40 peer-focus/input:text-black peer-valid/input:text-black',
		input: 'border-niagara-200 focus:border-niagara-500',
	},
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	variant?: 'light' | 'dark';
	type?: 'email' | 'text' | 'password';
	errorMsg?: string;
}
interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	variant?: 'light' | 'dark';
	errorMsg?: string;
}
interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
	options: { label: string; value: string }[];
	select?: string;
	errorMsg?: string;
	header?: string;
}

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
	chambas: ChambaProps[];
}

export function Input({
	label,
	variant = 'light',
	className,
	id,
	type = 'text',
	errorMsg,
	...props
}: InputProps) {
	const [show, setShow] = useState(false);
	const [isChange, setIsChange] = useState(false);
	const { pending } = useFormStatus();

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
					className={`bg-inherit outline-none peer/input p-1 ${
						isChange ? 'invalid:border-red-500' : ''
					}  ${variants[variant].input}  ${className}`}
					{...props}
					onBlur={() => setIsChange(true)}
					disabled={pending}
				/>
				{errorMsg && (
					<span
						className={`${
							isChange
								? 'peer-invalid/input:block peer-valid/input:hidden'
								: 'hidden'
						} text-red-500 text-xs`}
					>
						{errorMsg}
					</span>
				)}
				<label
					htmlFor={id}
					className={`absolute top-1/2 left-1 -translate-y-1/2 ${
						isChange
							? 'peer-invalid/input:text-red-500 peer-invalid/input:top-0 peer-invalid/input:left-3 peer-invalid/input:text-xs peer-invalid/input:-translate-y-full'
							: ''
					} ${variants[variant].label}
					peer-focus/input:top-0 peer-focus/input:left-3 peer-focus/input:text-xs peer-focus/input:-translate-y-full 
					peer-valid/input:top-0 peer-valid/input:left-3 peer-valid/input:text-xs peer-valid/input:-translate-y-full 
					transition-all duration-300`}
				>
					{label}
				</label>
				{type === 'password' && (
					<button
						type="button"
						className={`absolute right-3 top-1/2 -translate-y-1/2 ${
							variant == 'light' ? 'text-humo/65' : 'text-base'
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

export function Checkbox({
	label,
	className,
	id,
	children,
	checked,
	onChangeState,
	...props
}: InputProps & {
	checked?: boolean;
	onChangeState?: (checked: boolean) => void;
}) {
	const checkRef = useRef<HTMLInputElement | null>(null);

	const handleCheck = () => {
		const checkCurrent = checkRef.current;
		if (checkCurrent) {
			onChangeState && onChangeState(checkCurrent.checked);
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
				checked={checked}
				onChange={handleCheck}
			/>
			<div
				className={`grid place-content-center border-2 rounded-sm border-tuatara size-4 peer-checked/checkbox:bg-tuatara transition-colors duration-300 ${className}`}
			>
				<span
					className={`${
						checked ? 'opacity-100' : 'opacity-0'
					} transition-opacity duration-300 `}
				>
					<Check size={13} color="#fff" />
				</span>
			</div>
			<div>
				<h3>{label}</h3>
				{children}
			</div>
		</label>
	);
}

export function InputSearch({ chambas }: InputSearchProps) {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<ChambaProps[]>([]);
	const [isFocus, setIsFocus] = useState<boolean>(false);

	const fuse = new Fuse(chambas, {
		keys: ['title', 'slug', 'job_name'],
		threshold: 0.3,
	});

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		setInput(query);
		const result = fuse.search(query);
		setSuggestions(result.map(({ item }) => item));
	};

	const handleReset = () => {
		setInput('');
		setIsFocus(false);
	};

	return (
		<ClickOut onClickout={() => setIsFocus(false)}>
			<div className="flex w-fit relative">
				<input
					type="text"
					className="rounded-l-full border-2 border-niagara-500 p-1 px-2 w-96"
					placeholder="Buscar"
					value={input}
					onChange={handleSearch}
					onFocus={() => setIsFocus(true)}
				/>
				<button className="bg-niagara-500 text-white rounded-r-full p-1 px-3">
					<Search size={16} />
				</button>
				{input
					? isFocus && (
							<div className="absolute top-full mt-3 left-0 w-full max-h-64 overflow-y-auto change-scroll bg-humo rounded-md border">
								{suggestions.length > 0 ? (
									suggestions.map((chamba, i) => (
										<Link
											href={`/chamba/${chamba.slug}`}
											key={i}
											onClick={handleReset}
										>
											<div className="w-full hover:bg-gray-200 p-2 rounded-md">
												<h1 className="font-bold">{chamba.title}</h1>
												<div className="flex flex-row gap-2 *:text-slate-400">
													<span className="font-normal text-sm">
														{chamba.job_name}
													</span>
													<span className="font-bold text-sm">
														{chamba.worker_name}
													</span>
												</div>
											</div>
										</Link>
									))
								) : (
									<div className="w-full p-2 rounded-md">
										No hay resultados...
									</div>
								)}
							</div>
					  )
					: null}
			</div>
		</ClickOut>
	);
}

export function TextArea({
	label,
	className,
	variant = 'light',
	value,
	errorMsg,
	id,
	...props
}: TextAreaProps) {
	const [isChange, setIsChange] = useState(false);

	return (
		<div className="relative w-full">
			<textarea
				{...props}
				id={id}
				className={`bg-inherit outline-none peer/input p-1 resize-none ${
					isChange ? 'invalid:border-red-500' : ''
				}  ${variants[variant].input}  ${className}`}
				rows={6}
				onBlur={() => setIsChange(true)}
			>
				{value}
			</textarea>
			{errorMsg && (
				<span
					className={`${
						isChange
							? 'peer-invalid/input:block peer-valid/input:hidden'
							: 'hidden'
					} text-red-500 text-xs`}
				>
					{errorMsg}
				</span>
			)}
			<label
				htmlFor={id}
				className={`absolute top-1 left-1 ${
					isChange
						? 'peer-invalid/input:text-red-500 peer-invalid/input:top-0 peer-invalid/input:left-3 peer-invalid/input:text-xs peer-invalid/input:-translate-y-full'
						: ''
				} ${variants[variant].label}
					peer-focus/input:top-0 peer-focus/input:left-3 peer-focus/input:text-xs peer-focus/input:-translate-y-full 
					peer-valid/input:top-0 peer-valid/input:left-3 peer-valid/input:text-xs peer-valid/input:-translate-y-full 
					transition-all duration-300`}
			>
				{label}
			</label>
		</div>
	);
}

export default function RadioGroup({
	options,
	className,
	id,
	select = '',
	errorMsg,
	header,
	...props
}: RadioGroupProps) {
	const [selectedValue, setSelectedValue] = useState(select);
	const handleChange = (value: string) => {
		// console.log(value);

		setSelectedValue(value);
	};
	return (
		<div>
			<div className="mb-2">
				{header && <h3 className="text-sm ">{header}</h3>}
				{errorMsg && <span className="text-xs text-red-500">{errorMsg}</span>}
			</div>
			<div className="flex gap-3 flex-wrap">
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
								className={`border-2 border-gray-300 p-1 px-2 rounded-lg peer-checked/check:bg-niagara-300 ${className}`}
							>
								{radio.label}
							</span>
						</label>
					)}
				/>
			</div>
		</div>
	);
}
