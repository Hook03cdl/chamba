'use client';

import { AtSign, ChevronLeft, User } from 'lucide-react';
import { ToolTip } from './Tooltip';
import { useEffect, useState } from 'react';
import { navigate, useTimeLine } from '@/hooks/useTimeLine';
import Each from '../Each';
import { Button } from './button';

interface TimelineProps {
	sections?: React.ReactNode[] | undefined;
	buttonSubmit?: React.ReactNode;
}

export default function Timeline({ sections, buttonSubmit }: TimelineProps) {
	const [position, setPosition] = useState(0);
	return (
		<div>
			<div className="flex items-center justify-center gap-3 mb-20">
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
			<div>
				{sections && (
					<Each
						of={sections}
						render={(section, i) => (
							<div className={`${i == position ? 'block' : 'hidden'}`}>
								{section}
							</div>
						)}
					/>
				)}
				<div className="grid grid-cols-[auto_1fr] gap-3 mt-10">
					<Button
						type="button"
						onClick={() => {
							if (position > 0) setPosition(position - 1);
						}}
					>
						<ChevronLeft size={20} />
					</Button>
					{sections && position !== sections?.length - 1 ? (
						<Button
							type="button"
							onClick={() => {
								if (sections && position < sections?.length - 1)
									setPosition(position + 1);
							}}
						>
							Siguiente
						</Button>
					) : (
						buttonSubmit && buttonSubmit
					)}
				</div>
			</div>
		</div>
	);
}
