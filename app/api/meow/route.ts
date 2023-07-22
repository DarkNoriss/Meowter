import { prisma } from '@/utils/connectToDb';

export const GET = async () => {
  try {
    const meows = await prisma.meow.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        likes: true,
        replies: {
          include: {
            user: true,
            likes: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all meows', { status: 500 });
  }
};

export const revalidate = 0;
