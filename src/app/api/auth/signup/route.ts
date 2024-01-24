import mongoosePromise from '@/lib/mongoose/mongoosePromise';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await mongoosePromise;
  try {
    await newUser.save();
    return new NextResponse('User has been created', { status: 201 });
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};
