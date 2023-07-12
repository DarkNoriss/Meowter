import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  console.log('Fetching meows...');
  try {
    const meows = await prisma.meow.findMany({
      orderBy: [{ created_at: 'desc' }],
      include: {
        author: true,
      },
    });
    console.log('fetched meows', meows);
    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all meows', { status: 500 });
  }
};
