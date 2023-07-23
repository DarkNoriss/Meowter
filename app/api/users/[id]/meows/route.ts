import { MeowWithAuthor } from '@/types/custom-types';
import { prisma } from '@/utils/connectToDb';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { userlink: params.id },
    });

    if (!user) return;
    const userMeows: MeowWithAuthor = await prisma.meow.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        likes: true,
        replies: { include: { user: true } },
      },
    });

    return new Response(JSON.stringify(userMeows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch user meows', { status: 500 });
  }
};
