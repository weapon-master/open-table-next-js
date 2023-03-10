import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/utils/prisma';
import validator from 'validator';
import bcrypt from 'bcrypt';
import * as jose from 'jose';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  const isEmailValid = validator.isEmail(email);
  if (!isEmailValid)
    return NextResponse.json(
      { message: 'Email is not valid' },
      { status: 400 },
    );

  const existingUserWithCurrentEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!existingUserWithCurrentEmail)
    return NextResponse.json(
      { message: 'User with this email does not exist' },
      { status: 400 },
    );
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUserWithCurrentEmail.password,
  );
  if (!isPasswordCorrect)
    return NextResponse.json(
      { message: 'Password is incorrect' },
      { status: 400 },
    );
  const alg = 'HS256';
  const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({
    id: existingUserWithCurrentEmail.id,
    email: existingUserWithCurrentEmail.email,
  })
    .setProtectedHeader({ alg })
    .setExpirationTime('1d')
    .sign(jwtSecret);

  return NextResponse.json({ token }, { status: 200 });
}
