import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
	const existSession = req.cookies.has('session');

	if (!existSession) return NextResponse.redirect(new URL('/login', req.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/servicio/:path*', '/perfil', '/perfil/:path*'],
};
