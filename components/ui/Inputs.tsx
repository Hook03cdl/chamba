'use client';

import { Check } from 'lucide-react';
import { useRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
	return (
		<div className="flex flex-col max-w-max">
			<div className="relative">
				<input
					id={id}
					name={id}
					{...props}
					className={` bg-inherit outline-none border-b-2 focus:border-niagara-500 peer/input valid:border-niagara-500 ${className}`}
				/>
				<label
					htmlFor={id}
					className="absolute top-1/2 left-0 -translate-y-1/2 text-gray-400
					peer-focus/input:top-0 peer-focus/input:left-3 peer-focus/input:text-xs peer-focus/input:text-black peer-focus/input:-translate-y-full 
					peer-valid/input:top-0 peer-valid/input:left-3 peer-valid/input:text-xs peer-valid/input:text-black peer-valid/input:-translate-y-full 
					transition-all duration-300"
				>
					{label}
				</label>
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
