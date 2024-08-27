'use client';

import { AtSign, User } from 'lucide-react';
import { ToolTip } from './Tooltip';
import { useEffect, useState } from 'react';
import { navigate, useTimeLine } from '@/hooks/useTimeLine';

interface TimelineProps {
	change?: (s: number) => void;
}

export default function Timeline({ change }: TimelineProps) {
	const { section } = useTimeLine();
	const [position, setPosition] = useState(section);
	useEffect(() => {
		setPosition(section);
		if (change) {
			change(section);
		}
	}, [change, section]);

	return (
		<div className="fixed top-10 flex items-center gap-3 mb-20">
			<ToolTip content={'Cuenta'} variant={'bottom'}>
				<button
					onClick={() => navigate(0)}
					className={`${
						position == 0
							? 'bg-niagara-200'
							: position > 0
							? 'bg-niagara-500'
							: 'bg-humo'
					} p-2 rounded-full transition-all duration-300`}
				>
					<AtSign size={15} strokeWidth={3} />
				</button>
			</ToolTip>
			<div className="h-[2px] bg-gray-300 w-14 rounded-full" />
			<ToolTip content={'Datos personales'} variant={'bottom'}>
				<button
					onClick={() => navigate(1)}
					className={`${
						position == 1
							? 'bg-niagara-200'
							: position > 1
							? 'bg-niagara-500'
							: 'bg-humo'
					} p-2 rounded-full transition-all duration-300`}
				>
					<User size={15} strokeWidth={3} />
				</button>
			</ToolTip>
		</div>
	);
}
