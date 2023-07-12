import { strToLink } from './strToLink';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function createUser(profile: any) {
  console.log(profile);

  const user = await prisma.user.findUnique({
    where: { email: profile.user.email || '' },
  });

  // Check if the user already exists
  if (user) {
    console.log('User already exists');
    return;
  }

  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      username: profile.user.name,
      email: profile.user.email,
      userlink: strToLink(profile.user.name),
      avatar: profile.user.image ?? profile.user.picture,
    },
  });

  console.log('New user created:', newUser);
}
