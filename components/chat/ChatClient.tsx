'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { MessagesProps } from '@/lib/interfaces/messages/interfaces';
import { getChatMessages } from '@/lib/data/chats';
import dynamic from 'next/dynamic';
const RelativeTime = dynamic(() => import('../ui/RelativeTime'), {
	ssr: false,
});

export default function ChatClient({
	initialMessages,
	chatId,
	userId,
}: {
	initialMessages: MessagesProps[];
	chatId: string;
	userId: string | number;
}) {
	const [messages, setMessages] = useState<MessagesProps[]>(initialMessages);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	// Scroll to the bottom whenever messages change
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	}, [messages]);

	// Fetch messages periodically
	useEffect(() => {
		const fetchMessages = async () => {
			const messages = await getChatMessages(chatId);
			setMessages(
				messages.sort(
					(a, b) =>
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
				)
			);
		};

		const intervalId = setInterval(() => {
			fetchMessages();
		}, 5000);

		return () => clearInterval(intervalId);
	}, [chatId]);

	return (
		<Suspense fallback={<div>cargando...</div>}>
			<div
				className="flex flex-col gap-2 p-5 overflow-y-auto change-scroll"
				ref={chatContainerRef}
			>
				{messages.length === 0 ? (
					<span>No Messages Found</span>
				) : (
					messages.map((m: MessagesProps) => (
						<div
							key={m.id}
							className={`w-fit rounded-md p-2 max-w-[80%] ${
								m.user_id == userId ? 'bg-gray-200 self-end' : 'bg-niagara-300'
							}`}
						>
							<p>{m.body}</p>
							<div className="flex justify-between *:text-xs">
								{m.user_id !== userId && <p>{m.user.name}</p>}
								<span>
									<RelativeTime dateTime={m.created_at} />
								</span>
							</div>
						</div>
					))
				)}
			</div>
		</Suspense>
	);
}
