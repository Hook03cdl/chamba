import Avatar from '../ui/Avatar';
import {InputSearch} from '../ui/Inputs';
import Logo from '../ui/Logo';
import Notifications from './Notifications';
import Link from 'next/link';
import {getToken} from '@/lib/utils/tokens';
import {Gem, MessageCircle} from 'lucide-react';
import {fetchDataUser} from '@/lib/data/user';
import {getUserNotifications} from '@/lib/data/notifications';
import {fetchDataChambas} from '@/lib/data/chambas';
import {getAuthUserChats} from '@/lib/data/chats';
import Popover, {PopLink} from '@/components/ui/Popover';
import Each from '@/components/Each';
import {ChatProps} from '@/lib/interfaces/interface';

export default async function Navbar() {
    const session = await getToken('session');
    const user = await fetchDataUser();
    const notifications = await getUserNotifications();
    const chambas = await fetchDataChambas();
    const chats = await getAuthUserChats();

    return (
        <header className="sticky z-40 top-0 bg-humo">
            <div className="flex justify-between items-center p-3 px-10 shadow-md">
                <Logo size="small" variant="dark"/>
                <InputSearch chambas={chambas || []}/>
                <div className="flex gap-3 items-center">
                    {session && (
                        <>
                            <Popover fallback={<MessageCircle size={28} className="text-gray-600"/>}>
                                <div className="min-w-80">
                                    {chats.message ? (
                                        <span>{chats.message}</span>
                                    ) : (
                                        <Each
                                            of={chats}
                                            render={(c: ChatProps) => (
                                                <PopLink
                                                    href={`/chat/${c.uuid}?user=${c.worker.name}`}
                                                >
                                                    <div className={'flex flex-col'}>
                                                        <span className="font-bold">{c.worker.name}</span>
                                                        <span className="text-gray-500 text-sm">
																{c.request_chamba.chamba.title}
															</span>
                                                    </div>
                                                </PopLink>
                                            )}
                                        />
                                    )}
                                </div>
                            </Popover>
                            {user?.role === '0' && (
                                <Link href={'/suscribirse'} className="text-gray-600">
                                    <Gem size={28}/>
                                </Link>
                            )}
                            <Notifications notifications={notifications}/>
                        </>
                    )}
                    <Avatar/>
                </div>
            </div>
        </header>
    );
}
