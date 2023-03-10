import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';
import { prisma } from '@/app/utils/prisma';

export async function GET(request: NextRequest) {
  const bearerToken = request.headers.get('Authorization');
  if (!bearerToken)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  const token = bearerToken.split(' ')[1];
  if (!token)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  try {
    const payload = await jose.decodeJwt(token);
    const userId = payload.id as number;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        city: true,
      },
    });
    if (!user)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
