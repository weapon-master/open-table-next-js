import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { prisma } from '@/app/utils/prisma';
import bcrypt from 'bcrypt';
import * as jose from 'jose';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, firstName, lastName, phone, city } = body;
  const validatorSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: 'Email is not valid',
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: 'Password is not strong enough',
    },
    {
      valid: validator.isLength(firstName, { min: 3, max: 20 }),
      errorMessage: 'First name must be between 3 and 20 characters',
    },
    {
      valid: validator.isLength(lastName, { min: 3, max: 20 }),
      errorMessage: 'Last name must be between 3 and 20 characters',
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: 'Phone number is not valid',
    },
    {
      valid: validator.isLength(city, { min: 3, max: 20 }),
      errorMessage: 'City must be between 3 and 20 characters',
    },
  ];
  const error = validatorSchema.find((item) => !item.valid);
  if (error)
    return NextResponse.json({ message: error.errorMessage }, { status: 400 });
  const existingUserWithCurrentEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUserWithCurrentEmail)
    return NextResponse.json(
      { message: 'User with this email already exists' },
      { status: 400 },
    );
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      city,
    },
  });
  const alg = 'HS256';
  const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({
    id: user.id,
    email: user.email,
  })
    .setProtectedHeader({ alg })
    .setExpirationTime('1d')
    .sign(jwtSecret);
  return NextResponse.json({ user, token }, { status: 200 });
  // return NextResponse.json({ message: hashedPassword }, { status: 200 });
}
