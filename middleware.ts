import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  const bearerToken = request.headers.get('Authorization');
  if (!bearerToken)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  const token = bearerToken.split(' ')[1];
  if (!token)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const verification = await jose.jwtVerify(token, jwtSecret, {
      algorithms: ['HS256'],
    });

    if (!verification)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/auth/me'],
};
