'use client';

import { storeMessage } from '@/lib/actions/chats';
import { getChatMessages } from '@/lib/data/chats';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function SendMessage({ chatId }: { chatId: string }) {
	const [newMessage, setNewMessage] = useState<string>('');

	const handleMessage = async () => {
		if (newMessage.trim() !== '') {
			await storeMessage(chatId, newMessage);
			setNewMessage('');
			const updatedMessages = await getChatMessages(chatId);
		}
	};
	return (
		<div className="flex p-3 gap-1">
			<input
				type="text"
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				className="w-full rounded-md"
			/>
			<p>{newMessage}</p>
			<Button onClick={handleMessage}>
				<Send />
			</Button>
		</div>
	);
}
