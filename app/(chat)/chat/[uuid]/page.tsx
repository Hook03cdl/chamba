import ChatClient from '@/components/chat/ChatClient';
import Navbar from '@/components/chat/Navbar';
import SendMessage from '@/components/chat/SendMessage';
import { getChatMessages } from '@/lib/data/chats';
import { fetchDataUser } from '@/lib/data/user';

export default async function Page({ params }: { params: { uuid: string } }) {
	const messages = await getChatMessages(params.uuid);
	const user = await fetchDataUser();

	// console.log(user);
	if (!user) {
		return <h1>No puede acceder al chat sin un usuario</h1>;
	}

	return (
		<section className="h-svh grid grid-rows-[auto_1fr_auto]">
			<Navbar />
			<ChatClient
				initialMessages={messages}
				chatId={params.uuid}
				userId={user.id}
			/>
			<SendMessage chatId={params.uuid} />
		</section>
	);
}
