import { Bell } from 'lucide-react';
import Popover from '../ui/Popover';

export default function Notification() {
	return <Popover fallback={<Bell size={30} />}></Popover>;
}
