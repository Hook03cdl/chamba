import Avatar from '../ui/Avatar';
import { InputSearch } from '../ui/Inputs';
import Logo from '../ui/Logo';
import Notifications from './Notifications';
import Link from 'next/link';
import { getToken } from '@/lib/utils/tokens';
import { Gem } from 'lucide-react';
import { fetchDataUser } from '@/lib/data/user';
import { getUserNotifications } from '@/lib/data/notifications';
import { fetchDataChambas } from '@/lib/data/chambas';

export default async function Navbar() {
	const session = await getToken('session');
	const user = await fetchDataUser();
	const notifications = await getUserNotifications();
  const chambas = await fetchDataChambas();
	return (
    <header className="sticky z-40 top-0 bg-humo">
      <div className="flex justify-between items-center p-3 px-10 shadow-md">
        <Logo size="small" variant="dark" />
        <InputSearch chambas={chambas.chambas} />
        {/* <NavChambas /> */}
        <div className="flex gap-3 items-center">
          {session && (
            <>
              <Link href={"/suscribirse"} className="text-gray-600">
                <Gem size={28} />
              </Link>
              <Notifications notifications={notifications} />
            </>
          )}
          <Avatar />
        </div>
      </div>
	  {!user &&
		<div className="bg-niagara-700 p-1">
			<h1 className="text-center text-white uppercase leading-normal">
			<strong><a className='hover:underline' href='/signup'>Crea una cuenta</a></strong> para poder utilizar la aplicacion.
			</h1>
		</div>
	  }
    </header>
  );
}
