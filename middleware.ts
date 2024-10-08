import { NextRequest, NextResponse } from 'next/server';
import getRole from './lib/utils/getRole';

export default async function middleware(req: NextRequest) {
	const existSession = req.cookies.has('session');
	const role = await getRole();

	if (!existSession) return NextResponse.redirect(new URL('/login', req.url));

	if (req.nextUrl.pathname.startsWith('/dashboard') && role != '1')
		return NextResponse.redirect(new URL('/not-found', req.url));

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/servicio/:path*',
		'/perfil',
		'/perfil/:path*',
		'/dashboard',
		'/dashboard/:path*',
	],
};
