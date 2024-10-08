'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from './button';

export default function ButtonSubmit({ ...props }: ButtonProps) {
	const { pending } = useFormStatus();
	return <Button type="submit" disabled={pending} {...props} />;
}
